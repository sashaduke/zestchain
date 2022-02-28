package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

// SetPromoCount set promoCount in the store
func (k Keeper) SetPromoCount(ctx sdk.Context, promoCount types.PromoCount) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PromoCountKey))
	b := k.cdc.MustMarshal(&promoCount)
	store.Set([]byte{0}, b)
}

// GetPromoCount returns promoCount
func (k Keeper) GetPromoCount(ctx sdk.Context) (val types.PromoCount, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PromoCountKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePromoCount removes promoCount from the store
func (k Keeper) RemovePromoCount(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PromoCountKey))
	store.Delete([]byte{0})
}
