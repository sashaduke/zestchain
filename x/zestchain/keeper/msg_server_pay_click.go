package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func (k msgServer) PayClick(goCtx context.Context, msg *types.MsgPayClick) (*types.MsgPayClickResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPayClickResponse{}, nil
}
