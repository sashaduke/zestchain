package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) PayClick(goCtx context.Context, msg *types.MsgPayClick) (*types.MsgPayClickResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	ad, found := k.Keeper.GetAd(ctx, msg.Id)
	if !found {
                panic("Ad not found")
        }
        if ad.Pot >= 9 {
                ad.PayClick(msg.Creator)
                ad.Pot -= 9
                k.Keeper.SetAd(ctx, ad)
        }

	return &types.MsgPayClickResponse{}, nil
}
