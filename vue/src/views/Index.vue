<template>
  <div>
    <div class="container">
      <Welcome />
      <SpTokenSend :address="address" :refresh="true" />
      <SpTransferList :address="address" />
      <div class="sp-component-title">
        <h3>Connect to Extension</h3>
        <span>|</span>
        <span>Sync up your account to receive rewards</span>
      </div>
      <div class="sp-box sp-shadow">
        <span style="font-size: 1.28rem">Make sure that you are signed in using the menu in the corner and your wallet is unlocked.
          <br>You also need to have the Cytrus Chromium Extension installed.<br><br></span>
        <div>
          <form ref="form1" onsubmit="return false" style="display: inline">
            <button class="sp-button" type="submit">Connect</button>
          </form>
          <form ref="form2" onsubmit="return false" style="display: inline">
            <button class="sp-button sp-button-secondary" type="submit" style="left: 10px">Disconnect</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Welcome';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
export default {
  name: 'Index',
  mounted() {
    const store = this.$store.getters;
    const connect = async function(event) {
      event.preventDefault();
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
        store["common/wallet/getMnemonic"],
        {prefix: "cytrus"}
      );
      const secretKey = await wallet.serialize("cytrus_sk");
      window.postMessage({type: "cytrus_sk", sk: secretKey}, "*");
      alert("Connecting to extension with secret key:\n\n" + secretKey);
    }
    const disconnect = function(event) {
      event.preventDefault();
      window.postMessage({type: "cytrus_sk", sk: "disconnect"}, "*");
      alert("Disconnected from extension.");
    }
    const form1 = this.$refs.form1;
    const form2 = this.$refs.form2;
    form1.addEventListener("submit", connect);
    form2.addEventListener("submit", disconnect);
  },
  computed: {
    address() {
      return this.$store.getters['common/wallet/address']
    },
  },
  components : {
    Welcome
  }
}
</script>
