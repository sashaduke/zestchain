<template>
  <div>
    <div class="container">
      <Welcome />
      <SpTokenSend :address="address" :refresh="true" />
      <SpTransferList :address="address" />
      <SpButton href="http://zestcha.in/" target="_blank" type="primary">Blockchain</SpButton>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
export default {
  name: 'Index',
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
