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
          <button class="sp-button" type="connect" ref="connect">Connect</button>
          <button class="sp-button sp-button-secondary" type="disconnect" ref="disconnect" style="left: 10px">Disconnect</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
export default {
  name: 'Index',
  mounted() {
    const store = this.$store.getters;
    const connect = function() {
      console.log("Connecting...");
      window.postMessage({type: "mnemonic", mnemonic: store['common/wallet/getMnemonic']}, "*");
    }
    const disconnect = function() {
      console.log("Disconnecting...");
      window.postMessage({type: "mnemonic", mnemonic: "disconnect"}, "*");
    }
    const connectBtn = this.$refs.connect;
    const disconnectBtn = this.$refs.disconnect;
    connectBtn.addEventListener("connect", connect);
    disconnectBtn.addEventListener("disconnect", disconnect);
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
