package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/cytruslabs/zestchain/testutil/keeper"
	"github.com/cytruslabs/zestchain/testutil/nullify"
	"github.com/cytruslabs/zestchain/x/zestchain/keeper"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNAd(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Ad {
	items := make([]types.Ad, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetAd(ctx, items[i])
	}
	return items
}

func TestAdGet(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	items := createNAd(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAd(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAdRemove(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	items := createNAd(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAd(ctx,
			item.Index,
		)
		_, found := keeper.GetAd(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestAdGetAll(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	items := createNAd(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAd(ctx)),
	)
}
