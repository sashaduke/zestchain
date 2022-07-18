package zestchain

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/keeper"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.PromoCount != nil {
		k.SetPromoCount(ctx, *genState.PromoCount)
	}
	// Set all the promo
	for _, elem := range genState.PromoList {
		k.SetPromo(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all promoCount
	promoCount, found := k.GetPromoCount(ctx)
	if found {
		genesis.PromoCount = &promoCount
	}
	genesis.PromoList = k.GetAllPromo(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
