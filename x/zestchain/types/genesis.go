package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		AdCount: &AdCount{uint64(0)},
		AdList:  []Ad{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in ad
	adIndexMap := make(map[string]struct{})

	for _, elem := range gs.AdList {
		index := string(AdKey(elem.Index))
		if _, ok := adIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for ad")
		}
		adIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
