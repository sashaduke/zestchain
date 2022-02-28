package cli_test

import (
	"fmt"
	"testing"

	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/status"

	"github.com/cytruslabs/zestchain/testutil/network"
	"github.com/cytruslabs/zestchain/testutil/nullify"
	"github.com/cytruslabs/zestchain/x/zestchain/client/cli"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func networkWithPromoCountObjects(t *testing.T) (*network.Network, types.PromoCount) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	promoCount := &types.PromoCount{}
	nullify.Fill(&promoCount)
	state.PromoCount = promoCount
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), *state.PromoCount
}

func TestShowPromoCount(t *testing.T) {
	net, obj := networkWithPromoCountObjects(t)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc string
		args []string
		err  error
		obj  types.PromoCount
	}{
		{
			desc: "get",
			args: common,
			obj:  obj,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			var args []string
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowPromoCount(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetPromoCountResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.PromoCount)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.PromoCount),
				)
			}
		})
	}
}
