package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdPromoViewed() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "promo-viewed [id] [addr]",
		Short: "Broadcast message PromoViewed",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argId := args[0]
			argAddr := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgPromoViewed(
				clientCtx.GetFromAddress().String(),
				argId,
				argAddr,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
