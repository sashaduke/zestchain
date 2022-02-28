package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

// SetPromo set a specific promo in the store from its index
func (k Keeper) SetPromo(ctx sdk.Context, promo types.Promo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PromoKeyPrefix))
	b := k.cdc.MustMarshal(&promo)
	store.Set(types.PromoKey(
		promo.Index,
	), b)
}

// GetPromo returns a promo from its index
func (k Keeper) GetPromo(
	ctx sdk.Context,
	index string,

) (val types.Promo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PromoKeyPrefix))

	b := store.Get(types.PromoKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePromo removes a promo from the store
func (k Keeper) RemovePromo(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PromoKeyPrefix))
	store.Delete(types.PromoKey(
		index,
	))
}

// GetAllPromo returns all promo
func (k Keeper) GetAllPromo(ctx sdk.Context) (list []types.Promo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PromoKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Promo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
