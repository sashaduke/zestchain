package keeper

import (
	"context"
	"strconv"

	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) CreateAd(goCtx context.Context, msg *types.MsgCreateAd) (*types.MsgCreateAdResponse, error) {
	ctx := cosm.UnwrapSDKContext(goCtx)

	adCount, found := k.Keeper.GetAdCount(ctx)
	if !found {
		panic("AdCount not found")
	}
	newIndex := strconv.FormatUint(adCount.Counter, 10)
	ad := types.Ad{
		Index:   newIndex,
		Title:   msg.Title,
		Pot:     msg.Pot,
		Url:     msg.Url,
		Msg:     msg.Msg,
		Tags:    msg.Tags,
		Prefs:   msg.Prefs,
		Creator: msg.Creator,
	}

	k.Keeper.SetAd(ctx, ad)
	adCount.Counter++
	k.Keeper.SetAdCount(ctx, adCount)

	return &types.MsgCreateAdResponse{
		Counter: newIndex,
	}, nil
}

