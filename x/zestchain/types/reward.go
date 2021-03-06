package types

import (
	"context"
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	clienttx "github.com/cosmos/cosmos-sdk/client/tx"
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
	"google.golang.org/grpc"
)

func GetTxConfig() client.TxConfig {
	interfaceRegistry := codectypes.NewInterfaceRegistry()
	protoCodec := codec.NewProtoCodec(interfaceRegistry)
	return authtx.NewTxConfig(protoCodec, []signing.SignMode{signing.SignMode_SIGN_MODE_DIRECT})
}

func Reward(amount int64, recip cosm.AccAddress) error {
	txConfig := GetTxConfig()
	txBuilder := txConfig.NewTxBuilder() //client.TxConfig.NewTxBuilder()
	treasury, _ := cosm.AccAddressFromBech32("cosmos1ev6mfqxwecctpmwkef9fr7tgj83zhmdj7eha9w")
	msg := bank.NewMsgSend(treasury, recip, cosm.NewCoins(cosm.NewInt64Coin("ZEST", amount)))
	err := txBuilder.SetMsgs(msg)
	if err != nil {
		return err
	}

	var fee cosm.Coins = make([]cosm.Coin, 1)
	fee[0] = cosm.Coin{
		Denom:  "ZEST",
		Amount: cosm.NewInt(0),
	}
	txBuilder.SetFeeAmount(fee)
	txBuilder.SetGasLimit(0)
	txBuilder.SetTimeoutHeight(0)
	txBuilder.SetMemo("Promo reward")

	mnemonic := "author route print raccoon define salmon pool giant false north frog boy cost dial artist sphere cherry pipe subway inherit oak catalog sure address"
	priv1 := secp256k1.GenPrivKeyFromSecret([]byte(mnemonic))
	privs := []crypto.PrivKey{priv1}
	accNums := []uint64{1} // The accounts' account numbers
	accSeqs := []uint64{0} // The accounts' sequence numbers

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
		return err
	}

	sigsV2 = []signing.SignatureV2{}
	for i, priv := range privs {
		signerData := authsigning.SignerData{
			ChainID:       "zestchain",
			AccountNumber: accNums[i],
			Sequence:      accSeqs[i],
		}
		sigV2, err := clienttx.SignWithPrivKey(
			txConfig.SignModeHandler().DefaultMode(), signerData,
			txBuilder, priv, txConfig, accSeqs[i])
		if err != nil {
			return err
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2...)
	if err != nil {
		return err
	}

	txBytes, err := txConfig.TxEncoder()(txBuilder.GetTx())
	if err != nil {
		return err
	}

	grpcConn, _ := grpc.Dial(
		"127.0.0.1:9090",
		grpc.WithInsecure(),
	)
	defer grpcConn.Close()

	txClient := tx.NewServiceClient(grpcConn)
	grpcRes, err := txClient.BroadcastTx(
		context.Background(),
		&tx.BroadcastTxRequest{
			Mode:    tx.BroadcastMode_BROADCAST_MODE_SYNC,
			TxBytes: txBytes,
		},
	)
	if err != nil {
		return err
	}

	fmt.Println(grpcRes.TxResponse.Code) // Should be '0' if the tx is successful
	return nil
}

func (promo *Promo) ViewReward(recip string) {
	recipient, _ := cosm.AccAddressFromBech32(recip)
	Reward(1, recipient)
}

func (promo *Promo) ClickReward(recip string) {
	recipient, _ := cosm.AccAddressFromBech32(recip)
	Reward(9, recipient)
}
