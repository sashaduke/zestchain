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

func (k Keeper) PromoAll(c context.Context, req *types.QueryAllPromoRequest) (*types.QueryAllPromoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var promos []types.Promo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	promoStore := prefix.NewStore(store, types.KeyPrefix(types.PromoKeyPrefix))

	pageRes, err := query.Paginate(promoStore, req.Pagination, func(key []byte, value []byte) error {
		var promo types.Promo
		if err := k.cdc.Unmarshal(value, &promo); err != nil {
			return err
		}

		promos = append(promos, promo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPromoResponse{Promo: promos, Pagination: pageRes}, nil
}

func (k Keeper) Promo(c context.Context, req *types.QueryGetPromoRequest) (*types.QueryGetPromoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPromo(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetPromoResponse{Promo: val}, nil
}
