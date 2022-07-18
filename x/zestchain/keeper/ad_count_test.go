package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/cytruslabs/zestchain/testutil/keeper"
	"github.com/cytruslabs/zestchain/testutil/nullify"
	"github.com/cytruslabs/zestchain/x/zestchain/keeper"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func createTestAdCount(keeper *keeper.Keeper, ctx sdk.Context) types.AdCount {
	item := types.AdCount{}
	keeper.SetAdCount(ctx, item)
	return item
}

func TestAdCountGet(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	item := createTestAdCount(keeper, ctx)
	rst, found := keeper.GetAdCount(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestAdCountRemove(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	createTestAdCount(keeper, ctx)
	keeper.RemoveAdCount(ctx)
	_, found := keeper.GetAdCount(ctx)
	require.False(t, found)
}
