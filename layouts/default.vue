<template>
  <div class="layout-default">
    <TheHeader class="header" :user="user" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  },
  computed: {
    user: function() {
      return this.$store.state.user
    }
  }
}
</script>

<style></style>
