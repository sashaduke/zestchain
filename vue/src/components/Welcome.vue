<template>
  <div class="sp-component sp-welcome">
    <div class="sp-box sp-shadow sp-welcome__main">
      <div class="sp-welcome__header">
        <h2>Welcome to Cytrus</h2>
      </div>
      <p>
        Cytrus is a decentralised advertising network that enables you to passively earn crypto while you browse.<br />
        You can create a wallet, transfer your ZEST, and launch new advertisements all from this site!
      </p>
      <div class="sp-welcome__btns">
        <SpButton href="http://zestcha.in/" target="_blank" type="primary">Blockchain</SpButton>
        <SpButton
          href="https://github.com/cytruslabs/zestchain"
          target="_blank"
          type="secondary"
          class="sp-welcome__btns__github"
          >Github</SpButton
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SpButton from '../SpButton'
