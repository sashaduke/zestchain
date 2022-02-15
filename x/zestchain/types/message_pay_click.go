package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPayClick = "pay_click"

var _ sdk.Msg = &MsgPayClick{}

func NewMsgPayClick(creator string, id string) *MsgPayClick {
	return &MsgPayClick{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgPayClick) Route() string {
	return RouterKey
}

func (msg *MsgPayClick) Type() string {
	return TypeMsgPayClick
}

func (msg *MsgPayClick) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPayClick) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPayClick) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
