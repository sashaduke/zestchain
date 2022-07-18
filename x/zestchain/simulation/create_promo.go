package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cytruslabs/zestchain/x/zestchain/keeper"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func SimulateMsgCreatePromo(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreatePromo{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreatePromo simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreatePromo simulation not implemented"), nil, nil
	}
}
