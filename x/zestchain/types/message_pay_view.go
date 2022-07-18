package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPayView = "pay_view"

var _ sdk.Msg = &MsgPayView{}

func NewMsgPayView(creator string, id string) *MsgPayView {
	return &MsgPayView{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgPayView) Route() string {
	return RouterKey
}

func (msg *MsgPayView) Type() string {
	return TypeMsgPayView
}

func (msg *MsgPayView) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPayView) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPayView) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
