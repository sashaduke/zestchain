<template>
  <div class="sp-component sp-welcome">
    <div class="sp-box sp-shadow sp-welcome__main">
      <div class="sp-welcome__header">
        <h2>Welcome to Cytrus</h2>
      </div>
      <p>
        Cytrus is a decentralised advertising platform that passively earns you crypto while you browse.<br>
        You can create a wallet, transfer your ZEST, and launch new advertisements all from this site!
      </p><br>
      <div>
        <SpButton href="https://github.com/cytruslabs/cytrus_chromium_ext/releases/download/v0.0.2/cytrus_chromium_ext.zip" target="_blank" type="secondary">Chrome Extension</SpButton>
        <SpButton
          href="http://zestcha.in:4500"
          target="_blank"
          type="primary"
          style="left: 10px"
          >Faucet</SpButton
        >
        <SpButton href="http://zestcha.in" target="_blank" type="secondary" style="left: 20px">Blockchain</SpButton>
      </div>   
    </div>
  </div>
</template>
<script>
export default {
  name: 'Welcome',
}
</script>
