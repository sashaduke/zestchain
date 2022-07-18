package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/zestchain module sentinel errors
var (
	ErrNotEnoughZEST = sdkerrors.Register(ModuleName, 1100, "Not enough ZEST to create promo")
)
