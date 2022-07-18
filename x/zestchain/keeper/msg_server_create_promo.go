package keeper

import (
	"context"
	"strconv"

	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) CreatePromo(goCtx context.Context, msg *types.MsgCreatePromo) (*types.MsgCreatePromoResponse, error) {
	ctx := cosm.UnwrapSDKContext(goCtx)

	promoCount, found := k.Keeper.GetPromoCount(ctx)
	if !found {
		panic("PromoCount not found")
	}
	newIndex := strconv.FormatUint(promoCount.Total, 10)

	addr, err := cosm.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic("Creator address not valid")
	}
	err = k.bank.SendCoinsFromAccountToModule(ctx, addr, types.ModuleName, cosm.NewCoins(cosm.NewInt64Coin("ZEST", int64(msg.Pot))))
	if err != nil {
		panic("Not enough ZEST to create promo")
	}

	promo := types.Promo{
		Index:   newIndex,
		Creator: msg.Creator,
		Pot:     msg.Pot,
		Url:     msg.Url,
		Title:   msg.Title,
		Msg:     msg.Msg,
		Tags:    msg.Tags,
		Prefs:   msg.Prefs,
	}

	k.Keeper.SetPromo(ctx, promo)
	promoCount.Total++
	k.Keeper.SetPromoCount(ctx, promoCount)

	return &types.MsgCreatePromoResponse{
		Total: newIndex,
	}, nil
}
