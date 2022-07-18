package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePromo{}, "zestchain/CreatePromo", nil)
	cdc.RegisterConcrete(&MsgPromoViewed{}, "zestchain/PromoViewed", nil)
	cdc.RegisterConcrete(&MsgPromoClicked{}, "zestchain/PromoClicked", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePromo{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPromoViewed{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPromoClicked{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
