package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreatePromo = "create_promo"

var _ sdk.Msg = &MsgCreatePromo{}

func NewMsgCreatePromo(creator string, title string, pot uint64, url string, message string, tags string, prefs string) *MsgCreatePromo {
	return &MsgCreatePromo{
		Creator: creator,
		Title:   title,
		Pot:     pot,
		Url:     url,
		Message: message,
		Tags:    tags,
		Prefs:   prefs,
	}
}

func (msg *MsgCreatePromo) Route() string {
	return RouterKey
}

func (msg *MsgCreatePromo) Type() string {
	return TypeMsgCreatePromo
}

func (msg *MsgCreatePromo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePromo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePromo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
