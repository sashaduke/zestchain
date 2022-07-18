<template>
  <div>
    <div class="container">
      <!-- this line is used by starport scaffolding # 4 -->
      <h3>Create Promotion</h3><br>
      <span style="font-size: 1.4rem">Title</span>
      <form ref="form" onsubmit="return false"><!--action="createPromo" method="post">-->      
      <input
        class="sp-input sp-input-large"
        ref="title"
        placeholder="Earn Crypto with Cytrus"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.4rem">Budget (ZEST)</span>
      <input
        class="sp-input sp-input-large"
        ref="pot"
        placeholder="10000"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.4rem">URL</span>
      <input
        class="sp-input sp-input-large"
        ref="url"
        placeholder="cytrus.io"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.4rem">Message</span>
      <textarea
        class="sp-textarea"
        ref="msg"
        placeholder="Cytrus passively earns you crypto while you browse - no sign up needed! Join today at cytrus.io"
	v-on:focus="focused = true"
        v-on:blur="focused = false"></textarea>
      <br><br><button class="sp-button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { MsgPromoClicked, MsgPromoViewed, MsgCreatePromo } from "@/tx.js";
import { Api } from "@/rest.js"
const types = [
    ["/cytruslabs.zestchain.zestchain.MsgPromoClicked", MsgPromoClicked],
    ["/cytruslabs.zestchain.zestchain.MsgPromoViewed", MsgPromoViewed],
    ["/cytruslabs.zestchain.zestchain.MsgCreatePromo", MsgCreatePromo],
];
const registry = new Registry(types);
const fee = {
    amount: [],
    gas: "200000"
};
const mnemonic = "six dog stable much drop wonder broccoli child slight ancient stick reunion trophy nut evoke ecology brass razor uncover robust unlock dial correct deny";
const rpcEndpoint = "http://zestcha.in:26657";

export default {
    name: 'CreatePromo',
    mounted() {
	const initClient = async function() {
	    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
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
		typeUrl: types[2][0],
		value: promo
	    };
	    const result = await c.client.signAndBroadcast(c.user.address, [msg], fee);
	    console.log(result);
	};

	const submitForm = function(event) {
	    const promo = {
		creator: 'cosmos1v7gjegh95k7mqfmhu9j9s3s7jvsfxjfrrtahp0',
		title: title.value,
		pot: parseInt(pot.value),
		url: url.value,
		msg: msg.value,
		tags: '',
		prefs: '',
	    };

            event.preventDefault();
	    createPromo(promo);
	};
        const form = this.$refs.form;
	const title = this.$refs.title;
        const pot = this.$refs.pot;
        const url = this.$refs.url;
        const msg = this.$refs.msg;
        form.addEventListener('submit', submitForm);
    }
};
</script>
