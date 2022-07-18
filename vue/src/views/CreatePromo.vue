<template>
  <div>
    <div class="container">
      <!-- this line is used by starport scaffolding # 4 -->
      <div class="sp-component-title">
        <h3>Create Promotion</h3>
        <span>|</span>
        <span>Launch a new ad on the network</span>
      </div>
      <div class="sp-box sp-shadow">
      <span style="font-size: 1.28rem">Title</span>
      <form ref="form" onsubmit="return false">     
      <input
        class="sp-input"
        ref="title"
        placeholder="Earn Crypto with Cytrus"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.28rem">Budget in ZEST (1000 minimum)</span>
      <input
        class="sp-input"
        ref="pot"
        placeholder="10000"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.28rem">URL</span>
      <input
        class="sp-input"
        ref="url"
        placeholder="cytrus.io"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.28rem">Message</span>
      <input
        class="sp-input"
        ref="msg"
        placeholder="Cytrus passively earns you crypto while you browse - no sign up needed! Join today at cytrus.io"
	v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <button class="sp-button" type="submit">Submit</button>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { MsgCreatePromo } from "@/tx.js";
import { Api } from "@/rest.js"
const type = [["/cytruslabs.zestchain.zestchain.MsgCreatePromo", MsgCreatePromo]];
const registry = new Registry(type);
const fee = {
    amount: [],
    gas: "200000"
};
const rpcEndpoint = "http://zestcha.in:26657";
export default {
    name: "CreatePromo",
    mounted() {	
	const store = this.$store.getters;
	const initClient = async function() {
	    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(store["common/wallet/getMnemonic"]);
	    const [user] = await wallet.getAccounts();
	    const client = await SigningStargateClient.connectWithSigner(
		rpcEndpoint,
		wallet,
		{ registry: registry }
	    );
	    return {user: user, client: client};
	};	
	const createPromo = async function(promo) {
	    const c = await initClient();
	    const msg = {
		typeUrl: type[0][0],
		value: promo
	    };
	    const result = await c.client.signAndBroadcast(c.user.address, [msg], fee);
	    return result;
	};
	const submitForm = function(event) {
	    const promo = {
		creator: store["common/wallet/address"],
		title: title.value,
		pot: parseInt(pot.value),
		url: url.value,
		msg: msg.value,
		tags: '',
		prefs: '',
	    };
            event.preventDefault();
	    console.log(createPromo(promo));
	};
        const form = this.$refs.form;
	const title = this.$refs.title;
        const pot = this.$refs.pot;
        const url = this.$refs.url;
        const msg = this.$refs.msg;
        form.addEventListener("submit", submitForm);
    }
};
</script>
