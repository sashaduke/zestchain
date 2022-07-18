package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateAd = "create_ad"

var _ sdk.Msg = &MsgCreateAd{}

func NewMsgCreateAd(creator string, title string, pot string, url string, msg string, tags string, prefs string) *MsgCreateAd {
	return &MsgCreateAd{
		Creator: creator,
		Title:   title,
		Pot:     pot,
		Url:     url,
		Msg:     msg,
		Tags:    tags,
		Prefs:   prefs,
	}
}

func (msg *MsgCreateAd) Route() string {
	return RouterKey
}

func (msg *MsgCreateAd) Type() string {
	return TypeMsgCreateAd
}

func (msg *MsgCreateAd) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAd) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAd) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
