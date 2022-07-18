package zestchain_test

import (
	"testing"

	keepertest "github.com/cytruslabs/zestchain/testutil/keeper"
	"github.com/cytruslabs/zestchain/testutil/nullify"
	"github.com/cytruslabs/zestchain/x/zestchain"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		AdCount: &types.AdCount{
			Counter: 98,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ZestchainKeeper(t)
	zestchain.InitGenesis(ctx, *k, genesisState)
	got := zestchain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.AdCount, got.AdCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
