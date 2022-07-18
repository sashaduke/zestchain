package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/cytruslabs/zestchain/testutil/keeper"
	"github.com/cytruslabs/zestchain/testutil/nullify"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

func TestPromoCountQuery(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestPromoCount(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPromoCountRequest
		response *types.QueryGetPromoCountResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetPromoCountRequest{},
			response: &types.QueryGetPromoCountResponse{PromoCount: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.PromoCount(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
