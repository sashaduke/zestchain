<template>
  <div class="sp-component sp-welcome">
    <div class="sp-box sp-shadow sp-welcome__main">
      <div class="sp-welcome__header">
        <h2>Welcome to Cytrus</h2>
      </div>
      <p>
        Cytrus is a decentralised advertising network that enables you to passively earn crypto while you browse.<br>
        You can create a wallet, transfer your ZEST, and launch new advertisements all from this site!
      </p><br><br>
      <div>
        <SpButton href="http://zestcha.in" target="_blank" type="secondary">Chrome Extension</SpButton>
        <SpButton
          href="https://github.com/cytruslabs/zestchain"
          target="_blank"
          type="primary"
          style="left: 10px"
          >Github</SpButton
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
