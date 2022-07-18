package keeper

import (
	"context"

	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) PromoViewed(goCtx context.Context, msg *types.MsgPromoViewed) (*types.MsgPromoViewedResponse, error) {
	ctx := cosm.UnwrapSDKContext(goCtx)

	promo, found := k.Keeper.GetPromo(ctx, msg.Id)
	if !found {
		panic("Promo not found!")
	}
	addr, err := cosm.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic("Creator address not valid")
	}
	moduleAddr := cosm.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	if promo.Pot >= 1 {
		err = k.bank.SendCoins(ctx, moduleAddr, addr, cosm.NewCoins(cosm.NewInt64Coin("ZEST", 1)))
		if err != nil {
			k.Keeper.RemovePromo(ctx, promo.Index)
		} else {
			promo.Pot--
			k.Keeper.SetPromo(ctx, promo)
		}
	} else {
		k.Keeper.RemovePromo(ctx, promo.Index)
	}

	return &types.MsgPromoViewedResponse{}, nil
}
