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

func CmdCreateAd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-ad [title] [pot] [url] [msg] [tags] [prefs]",
		Short: "Broadcast message createAd",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTitle := args[0]
			argPot := args[1]
			argUrl := args[2]
			argMsg := args[3]
			argTags := args[4]
			argPrefs := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAd(
				clientCtx.GetFromAddress().String(),
				argTitle,
				argPot,
				argUrl,
				argMsg,
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
