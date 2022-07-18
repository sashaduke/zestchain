package keeper

import (
	"context"
	"math"
	"strconv"

	cosm "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreatePromo(goCtx context.Context, msg *types.MsgCreatePromo) (*types.MsgCreatePromoResponse, error) {
	ctx := cosm.UnwrapSDKContext(goCtx)

	promoCount, found := k.Keeper.GetPromoCount(ctx)
	if !found {
		panic("Promo count not found!")
	}
	newIndex := strconv.FormatUint(promoCount.Total, 10)

	addr, err := cosm.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic("Invalid account address!")
	}
	if msg.Title == "" || msg.Msg == "" || msg.Url == "" {
		panic("Field(s) cannot be left blank!")
	}
	if msg.Pot < 1000 {
		panic("Minimum budget is 1000 ZEST!")
	}

	rem := int64(0)
	if msg.Pot%2 == 1 {
		rem = int64(1)
	}
	amt := int64(math.Floor(float64(msg.Pot / 2)))
	moduleAddr := cosm.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	burnAddr := cosm.AccAddress(crypto.AddressHash([]byte("burn")))

	err = k.bank.SendCoins(ctx, addr, moduleAddr, cosm.NewCoins(cosm.NewCoin("ZEST", cosm.NewInt(amt+rem))))
	if err != nil {
		return &types.MsgCreatePromoResponse{}, sdkerrors.Wrapf(err, types.ErrNotEnoughZEST.Error())
	}
	err = k.bank.SendCoins(ctx, addr, burnAddr, cosm.NewCoins(cosm.NewCoin("ZEST", cosm.NewInt(amt))))
	if err != nil {
		return &types.MsgCreatePromoResponse{}, sdkerrors.Wrapf(err, types.ErrNotEnoughZEST.Error())
	}

	promo := types.Promo{
		Index:   newIndex,
		Creator: msg.Creator,
		Pot:     uint64(amt + rem),
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

