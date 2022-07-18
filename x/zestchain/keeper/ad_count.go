package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

// SetAdCount set adCount in the store
func (k Keeper) SetAdCount(ctx sdk.Context, adCount types.AdCount) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdCountKey))
	b := k.cdc.MustMarshal(&adCount)
	store.Set([]byte{0}, b)
}

// GetAdCount returns adCount
func (k Keeper) GetAdCount(ctx sdk.Context) (val types.AdCount, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdCountKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAdCount removes adCount from the store
func (k Keeper) RemoveAdCount(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdCountKey))
	store.Delete([]byte{0})
}
