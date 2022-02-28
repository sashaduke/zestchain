package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
	"github.com/spf13/cobra"
)

func CmdListPromo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-promo",
		Short: "list all promo",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPromoRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PromoAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPromo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-promo [index]",
		Short: "shows a promo",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetPromoRequest{
				Index: argIndex,
			}

			res, err := queryClient.Promo(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
