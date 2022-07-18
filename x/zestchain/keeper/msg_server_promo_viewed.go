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
		addr, err := cosm.AccAddressFromBech32(msg.Creator)
		if err != nil {
			panic("Creator address not valid")
		}
		err = k.bank.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, cosm.NewCoins(cosm.NewInt64Coin("ZEST", 1)))
		if err != nil {
			k.Keeper.RemovePromo(ctx, promo.Index)
			panic("Pot empty - promo removed")
		} else {
			promo.Pot--
			k.Keeper.SetPromo(ctx, promo)
		}
	}

	return &types.MsgPromoViewedResponse{}, nil
}
