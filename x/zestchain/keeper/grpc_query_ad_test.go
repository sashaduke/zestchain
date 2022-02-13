package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/cytruslabs/zestchain/testutil/keeper"
	"github.com/cytruslabs/zestchain/testutil/nullify"
	"github.com/cytruslabs/zestchain/x/zestchain/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestAdQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAd(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetAdRequest
		response *types.QueryGetAdResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetAdRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetAdResponse{Ad: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetAdRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetAdResponse{Ad: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetAdRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Ad(wctx, tc.request)
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

func TestAdQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.ZestchainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAd(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllAdRequest {
		return &types.QueryAllAdRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AdAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Ad), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Ad),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AdAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Ad), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Ad),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.AdAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Ad),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.AdAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
