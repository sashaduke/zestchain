package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPromoViewed = "promo_viewed"

var _ sdk.Msg = &MsgPromoViewed{}

func NewMsgPromoViewed(creator string, id string, addr string) *MsgPromoViewed {
	return &MsgPromoViewed{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgPromoViewed) Route() string {
	return RouterKey
}

func (msg *MsgPromoViewed) Type() string {
	return TypeMsgPromoViewed
}

func (msg *MsgPromoViewed) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPromoViewed) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPromoViewed) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
