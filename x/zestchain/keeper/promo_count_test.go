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

func createTestPromoCount(keeper *keeper.Keeper, ctx sdk.Context) types.PromoCount {
	item := types.PromoCount{}
	keeper.SetPromoCount(ctx, item)
	return item
}

func TestPromoCountGet(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	item := createTestPromoCount(keeper, ctx)
	rst, found := keeper.GetPromoCount(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestPromoCountRemove(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	createTestPromoCount(keeper, ctx)
	keeper.RemovePromoCount(ctx)
	_, found := keeper.GetPromoCount(ctx)
	require.False(t, found)
}
