package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AdAll(c context.Context, req *types.QueryAllAdRequest) (*types.QueryAllAdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ads []types.Ad
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	adStore := prefix.NewStore(store, types.KeyPrefix(types.AdKeyPrefix))

	pageRes, err := query.Paginate(adStore, req.Pagination, func(key []byte, value []byte) error {
		var ad types.Ad
		if err := k.cdc.Unmarshal(value, &ad); err != nil {
			return err
		}

		ads = append(ads, ad)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAdResponse{Ad: ads, Pagination: pageRes}, nil
}

func (k Keeper) Ad(c context.Context, req *types.QueryGetAdRequest) (*types.QueryGetAdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAd(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetAdResponse{Ad: val}, nil
}
