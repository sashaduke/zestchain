package types

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/tx"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
	authsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"
	authtx "github.com/cosmos/cosmos-sdk/x/auth/tx"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

func GetTxConfig() client.TxConfig {
	interfaceRegistry := codectypes.NewInterfaceRegistry()
	protoCodec := codec.NewProtoCodec(interfaceRegistry)
	return authtx.NewTxConfig(protoCodec, []signing.SignMode{signing.SignMode_SIGN_MODE_DIRECT})
}

func Pay(amount int, recip string) string {
	txConfig := GetTxConfig()
	txBuilder := txConfig.NewTxBuilder() //client.TxConfig.NewTxBuilder()
	msg := banktypes.NewMsgSend("cosmos19h39v0scqlyesn0mfh3ug33d7samzd59qxr6l0", recip, types.NewCoins(types.NewInt64Coin("ZEST", amount)))
	err := txBuilder.SetMsgs(msg)
	if err != nil {
		return err
	}

	txBuilder.SetGasLimit(0)
	txBuilder.SetFeeAmount(0)
	txBuilder.SetMemo("Ad reward")
	txBuilder.SetTimeoutHeight(0)

	privs := []cryptotypes.PrivKey{"b25bb748165b6a78ff93bedac2e824697edbe98f8688a1f6b04ae6090f5afcad"}
	accNums := []uint64{1, 0} // The accounts' account numbers
	accSeqs := []uint64{0, 1} // The accounts' sequence numbers

	var sigsV2 []signing.SignatureV2
	for i, priv := range privs {
		sigV2 := signing.SignatureV2{
			PubKey: priv.PubKey(),
			Data: &signing.SingleSignatureData{
				SignMode:  client.TxConfig.SignModeHandler().DefaultMode(),
				Signature: nil,
			},
			Sequence: accSeqs[i],
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2)
	if err != nil {
		return err
	}

	sigsV2 = []signing.SignatureV2{}
	for i, priv := range privs {
		signerData := authsigning.SignerData{
			ChainID:       "zestchain",
			AccountNumber: accNums[i],
			Sequence:      accSeqs[i],
		}
		sigV2, err := tx.SignWithPrivKey(
			txConfig.SignModeHandler().DefaultMode(), signerData,
			txBuilder, priv, txConfig, accSeqs[i])
		if err != nil {
			return err
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2)
	if err != nil {
		return err
	}

	txBytes, err := txConfig.TxEncoder()(txBuilder.GetTx())
	if err != nil {
		return err
	}

	txJSONBytes, err := txConfig.TxJSONEncoder()(txBuilder.GetTx())
	if err != nil {
		return err
	}
	txJSON := string(txJSONBytes)
	return txJSON
}

func (ad *Ad) PayView(recip types.AccAddress) {
	recipient := types.AccAddressFromBech32(recip)
	Pay(1, recipient)
}

func (ad *Ad) PayClick(recip types.AccAddress) {
	recipient := types.AccAddressFromBech32(recip)
	Pay(9, recipient)
}

