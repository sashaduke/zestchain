package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PromoKeyPrefix is the prefix to retrieve all Promo
	PromoKeyPrefix = "Promo/value/"
)

// PromoKey returns the store key to retrieve a Promo from the index fields
func PromoKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
