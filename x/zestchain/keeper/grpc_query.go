package keeper

import (
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

var _ types.QueryServer = Keeper{}
