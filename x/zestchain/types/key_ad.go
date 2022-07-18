package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AdKeyPrefix is the prefix to retrieve all Ad
	AdKeyPrefix = "Ad/value/"
)

// AdKey returns the store key to retrieve a Ad from the index fields
func AdKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
