package types

import (
	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
)

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx cosm.Context, addr cosm.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	//SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
	SendCoinsFromModuleToAccount(ctx cosm.Context, senderModule string, recipientAddr cosm.AccAddress, amt cosm.Coins) error
	SendCoinsFromAccountToModule(ctx cosm.Context, senderAddr cosm.AccAddress, recipientModule string, amt cosm.Coins) error
}
