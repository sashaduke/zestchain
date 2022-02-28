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

func createNPromo(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Promo {
	items := make([]types.Promo, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetPromo(ctx, items[i])
	}
	return items
}

func TestPromoGet(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	items := createNPromo(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPromo(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPromoRemove(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	items := createNPromo(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePromo(ctx,
			item.Index,
		)
		_, found := keeper.GetPromo(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestPromoGetAll(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	items := createNPromo(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPromo(ctx)),
	)
}
