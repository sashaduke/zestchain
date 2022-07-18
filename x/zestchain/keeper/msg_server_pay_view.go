package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) PayView(goCtx context.Context, msg *types.MsgPayView) (*types.MsgPayViewResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPayViewResponse{}, nil
}
