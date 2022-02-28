package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/spf13/cobra"
)

func CmdShowPromoCount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-promo-count",
		Short: "shows promoCount",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetPromoCountRequest{}

			res, err := queryClient.PromoCount(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
