<template>
  <SpSidebar v-on:sidebar-open="sidebarOpen = true" v-on:sidebar-close="sidebarOpen = false">
    <template v-slot:default>
      <img src="./logo.png" alt="Cytrus Logo" style="width: 75%" />
      <br>
      <SpLinkIcon link="/" text="Dashboard" icon="Dashboard" />
      <SpLinkIcon link="/createPromo" text="Create Promo" icon="Add" />
      <div class="sp-dash"></div>
      <SpLinkIcon href="https://chrome.google.com/webstore/detail/cytrus-chromium-extension/nlocmejmnonmncopfmfcchbbpfdhpmfi" target="_blank" text="Download Extension" icon="Download" />
      <SpLinkIcon href="https://github.com/cytruslabs/zestchain" target="_blank" text="Blockchain Source" icon="Settings" />
      <SpLinkIcon href="https://github.com/cytruslabs/cytrus_chromium_ext" target="_blank" text="Help / Extension Source" icon="Docs" />
    </template>
    <template v-slot:footer>
      <SpStatusAPI :showText="sidebarOpen" />
      <SpStatusRPC :showText="sidebarOpen" />
      <SpStatusWS :showText="sidebarOpen" />
      <div class="sp-text">Build: v0.3.8</div>
    </template>
  </SpSidebar>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarOpen: true,
    }
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(['common', 'wallet'])
    },
  },
}
</script>
