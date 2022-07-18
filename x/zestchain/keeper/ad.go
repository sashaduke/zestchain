package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

// SetAd set a specific ad in the store from its index
func (k Keeper) SetAd(ctx sdk.Context, ad types.Ad) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdKeyPrefix))
	b := k.cdc.MustMarshal(&ad)
	store.Set(types.AdKey(
		ad.Index,
	), b)
}

// GetAd returns a ad from its index
func (k Keeper) GetAd(
	ctx sdk.Context,
	index string,

) (val types.Ad, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdKeyPrefix))

	b := store.Get(types.AdKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAd removes a ad from the store
func (k Keeper) RemoveAd(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdKeyPrefix))
	store.Delete(types.AdKey(
		index,
	))
}

// GetAllAd returns all ad
func (k Keeper) GetAllAd(ctx sdk.Context) (list []types.Ad) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Ad
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
