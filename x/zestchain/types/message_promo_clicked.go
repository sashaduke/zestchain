package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPromoClicked = "promo_clicked"

var _ sdk.Msg = &MsgPromoClicked{}

func NewMsgPromoClicked(creator string, id string, addr string) *MsgPromoClicked {
	return &MsgPromoClicked{
		Creator: creator,
		Id:      id,
		Addr:    addr,
	}
}

func (msg *MsgPromoClicked) Route() string {
	return RouterKey
}

func (msg *MsgPromoClicked) Type() string {
	return TypeMsgPromoClicked
}

func (msg *MsgPromoClicked) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPromoClicked) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPromoClicked) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
