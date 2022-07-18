// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgPromoViewed } from "./types/zestchain/tx";
import { MsgCreatePromo } from "./types/zestchain/tx";
import { MsgPromoClicked } from "./types/zestchain/tx";


const types = [
  ["/cytruslabs.zestchain.zestchain.MsgPromoViewed", MsgPromoViewed],
  ["/cytruslabs.zestchain.zestchain.MsgCreatePromo", MsgCreatePromo],
  ["/cytruslabs.zestchain.zestchain.MsgPromoClicked", MsgPromoClicked],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgPromoViewed: (data: MsgPromoViewed): EncodeObject => ({ typeUrl: "/cytruslabs.zestchain.zestchain.MsgPromoViewed", value: MsgPromoViewed.fromPartial( data ) }),
    msgCreatePromo: (data: MsgCreatePromo): EncodeObject => ({ typeUrl: "/cytruslabs.zestchain.zestchain.MsgCreatePromo", value: MsgCreatePromo.fromPartial( data ) }),
    msgPromoClicked: (data: MsgPromoClicked): EncodeObject => ({ typeUrl: "/cytruslabs.zestchain.zestchain.MsgPromoClicked", value: MsgPromoClicked.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
