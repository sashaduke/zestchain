package keeper

import (
	"context"

	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) PromoViewed(goCtx context.Context, msg *types.MsgPromoViewed) (*types.MsgPromoViewedResponse, error) {
	ctx := cosm.UnwrapSDKContext(goCtx)

	promo, found := k.Keeper.GetPromo(ctx, msg.Id)
	if !found {
        	panic("Promo not found!")
        }
        if promo.Pot >= 1 {
                //ViewReward(msg.Id, msg.Creator)
                promo.Pot -= 1
                k.Keeper.SetPromo(ctx, promo)
        }

	return &types.MsgPromoViewedResponse{}, nil
}
