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
	if promo.Pot >= 9 {
		addr, err := cosm.AccAddressFromBech32(msg.Creator)
		if err != nil {
			panic("Creator address not valid")
		}
		moduleAddr := cosm.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
		err = k.bank.SendCoins(ctx, moduleAddr, addr, cosm.NewCoins(cosm.NewInt64Coin("ZEST", 9)))
		if err != nil {
			k.Keeper.RemovePromo(ctx, promo.Index)
			panic("Pot empty - promo removed")
		} else {
			promo.Pot -= 9
			k.Keeper.SetPromo(ctx, promo)
		}
	}

	return &types.MsgPromoClickedResponse{}, nil
}
