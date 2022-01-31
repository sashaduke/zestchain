package keeper_test

import (
	"testing"

	testkeeper "github.com/cytruslabs/zestchain/testutil/keeper"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ZestchainKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
