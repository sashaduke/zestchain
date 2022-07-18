package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) PayView(goCtx context.Context, msg *types.MsgPayView) (*types.MsgPayViewResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	ad, found := k.Keeper.GetAd(ctx, msg.Id)
	if !found {
                panic("Ad not found")
        }
	if ad.Pot >= 1 {
		ad.PayView(msg.Creator)
		ad.Pot--
		k.Keeper.SetAd(ctx, ad)
	}
	return &types.MsgPayViewResponse{}, nil
}
