<template>
  <div>
    <div class="container">
      <!-- this line is used by starport scaffolding # 4 -->
      <h3>Create Promotion</h3><br>
      <span style="font-size: 1.4rem">Title</span>
      <form ref="form"><!--action="createPromo" method="post">-->      
      <input
        class="sp-input sp-input-large"
        name="title"
        id="title"
        placeholder="Earn Crypto with Cytrus"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.4rem">Budget (ZEST)</span>
      <input
        class="sp-input sp-input-large"
        name="pot"
        id="pot"
        placeholder="10000"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.4rem">URL</span>
      <input
        class="sp-input sp-input-large"
        name="url"
        id="url"
        placeholder="cytrus.io"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      /><br><br>
      <span style="font-size: 1.4rem">Message</span>
      <textarea
        class="sp-textarea"
        name="msg"
        id="msg"
        placeholder="Cytrus passively earns you crypto while you browse - no sign up needed! Join today at cytrus.io">
      </textarea>
      <br><br><SpButton type="primary">Submit</SpButton>
	<button type="create">Submit</button>
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
/*
const submitForm = function(){//event) {
    //const creator = document.getElementById('creator').value;
    const title = this.$refs.title.value;//document.getElementById('title').value;
    const pot = parseInt(this.$refs.pot.value);//parseInt(document.getElementById('pot').value);
    const url = this.$refs.url.value;//document.getElementById('url').value;
    const msg = this.$refs.msg.value;//document.getElementById('msg').value;
    //const tags = document.getElementById('tags').value;
    //const prefs = document.getElementById('prefs').value;
   
    const promo = {
        creator: 'cosmos1v7gjegh95k7mqfmhu9j9s3s7jvsfxjfrrtahp0',
        title: title,
        pot: pot,
        url: url,
        msg: msg,
        tags: '',
        prefs: '',
    };

    //event.preventDefault();
    createPromo(promo);
};
*/
//window.addEventListener('load', function() {
//mounted() {
//    const form = this.$refs.form;
//    form.addEventListener('submit', submitForm);
//};//});
export default {
    name: 'CreatePromo',
    mounted() {
const submitForm = function(){//event) {
    //const creator = document.getElementById('creator').value;
    const title = this.$refs.title.value;//document.getElementById('title').value;
    const pot = parseInt(this.$refs.pot.value);//parseInt(document.getElementById('pot').value);
    const url = this.$refs.url.value;//document.getElementById('url').value;
    const msg = this.$refs.msg.value;//document.getElementById('msg').value;
    //const tags = document.getElementById('tags').value;
    //const prefs = document.getElementById('prefs').value;

    const promo = {
        creator: 'cosmos1v7gjegh95k7mqfmhu9j9s3s7jvsfxjfrrtahp0',
        title: title,
        pot: pot,
        url: url,
        msg: msg,
        tags: '',
        prefs: '',
    };

    //event.preventDefault();
    createPromo(promo);
};
        const form = this.$refs.form;
        form.addEventListener('create', submitForm);
    }
};
</script>
