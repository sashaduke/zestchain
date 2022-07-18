package keeper

import (
	"context"

	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) PromoClicked(goCtx context.Context, msg *types.MsgPromoClicked) (*types.MsgPromoClickedResponse, error) {
	ctx := cosm.UnwrapSDKContext(goCtx)

	promo, found := k.Keeper.GetPromo(ctx, msg.Id)
        if promo.Pot >= 9 {
                //ClickReward(msg.Id, msg.Creator)
                promo.Pot -= 9
                k.Keeper.SetPromo(ctx, promo)
        }

	return &types.MsgPromoClickedResponse{}, nil
}
