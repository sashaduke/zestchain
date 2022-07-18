package types

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	crypto "github.com/cosmos/cosmos-sdk/crypto/types"
	cosm "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/tx"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
	authsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"
	authtx "github.com/cosmos/cosmos-sdk/x/auth/tx"
	bank "github.com/cosmos/cosmos-sdk/x/bank/types"
)

func GetTxConfig() client.TxConfig {
	interfaceRegistry := codectypes.NewInterfaceRegistry()
	protoCodec := codec.NewProtoCodec(interfaceRegistry)
	return authtx.NewTxConfig(protoCodec, []signing.SignMode{signing.SignMode_SIGN_MODE_DIRECT})
}

func Pay(amount int64, recip cosm.AccAddress) (string, error) {
	txConfig := GetTxConfig()
	txBuilder := txConfig.NewTxBuilder() //client.TxConfig.NewTxBuilder()
	treasury, _ := cosm.AccAddressFromBech32("cosmos19h39v0scqlyesn0mfh3ug33d7samzd59qxr6l0")
	msg := bank.NewMsgSend(treasury, recip, cosm.NewCoins(cosm.NewInt64Coin("ZEST", amount)))
	err := txBuilder.SetMsgs(msg)
	if err != nil {
		return "", err
	}

	var fee cosm.Coins = make([]cosm.Coin, 1)
	fee[0] = cosm.Coin{
		Denom:  "ZEST",
		Amount: cosm.Int(0)}
	txBuilder.SetFeeAmount(fee)
	txBuilder.SetGasLimit(0)
	txBuilder.SetTimeoutHeight(0)
	txBuilder.SetMemo("Ad reward")

	priv1 := secp256k1.GenPrivKeyFromSecret([]byte("test test test"))
	privs := []crypto.PrivKey{priv1}
	accNums := []uint64{1, 0} // The accounts' account numbers
	accSeqs := []uint64{0, 1} // The accounts' sequence numbers

	var sigsV2 []signing.SignatureV2
	for i, priv := range privs {
		sigV2 := signing.SignatureV2{
			PubKey: priv.PubKey(),
			Data: &signing.SingleSignatureData{
				SignMode:  txConfig.SignModeHandler().DefaultMode(),
				Signature: nil,
			},
			Sequence: accSeqs[i],
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2...)
	if err != nil {
		return "", err
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
			return "", err
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2...)
	if err != nil {
		return "", err
	}

	txBytes, err := txConfig.TxEncoder()(txBuilder.GetTx())
	if err != nil {
		return "", err
	}

	txJSONBytes, err := txConfig.TxJSONEncoder()(txBuilder.GetTx())
	if err != nil {
		return "", err
	}
	txJSON := string(txJSONBytes)
	return txJSON, nil
}

func (ad *Ad) PayView(recip string) {
	recipient, _ := cosm.AccAddressFromBech32(recip)
	Pay(1, recipient)
}

func (ad *Ad) PayClick(recip string) {
	recipient, _ := cosm.AccAddressFromBech32(recip)
	Pay(9, recipient)
}

