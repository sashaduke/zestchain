package keeper

import (
	"context"

	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) PromoClicked(goCtx context.Context, msg *types.MsgPromoClicked) (*types.MsgPromoClickedResponse, error) {
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

	if promo.Pot >= 9 {
		err = k.bank.SendCoins(ctx, moduleAddr, addr, cosm.NewCoins(cosm.NewInt64Coin("ZEST", 9)))
		if err != nil {
			k.Keeper.RemovePromo(ctx, promo.Index)
		} else {
			promo.Pot -= 9
			k.Keeper.SetPromo(ctx, promo)
		}
	} else {
		err = k.bank.SendCoins(ctx, moduleAddr, addr, cosm.NewCoins(cosm.NewInt64Coin("ZEST", int64(promo.Pot))))
		k.Keeper.RemovePromo(ctx, promo.Index)
	}

	return &types.MsgPromoClickedResponse{}, nil
}
