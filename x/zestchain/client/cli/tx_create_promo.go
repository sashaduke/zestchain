package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreatePromo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-promo [title] [pot] [url] [message] [tags] [prefs]",
		Short: "Broadcast message createPromo",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTitle := args[0]
			argPot, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argUrl := args[2]
			argMessage := args[3]
			argTags := args[4]
			argPrefs := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePromo(
				clientCtx.GetFromAddress().String(),
				argTitle,
				argPot,
				argUrl,
				argMessage,
				argTags,
				argPrefs,
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
