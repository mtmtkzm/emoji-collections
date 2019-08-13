<template>
  <div class="layouts-default">
    <div class="sidebar">
      Aside
    </div>
    <div class="container">
      <TheHeader class="header" :user="user" />
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/modules/TheHeader'

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

<style>
.layouts-default {
  display: flex;
}

.sidebar {
  width: 104px;
  height: 100vh;
  background-color: #000;
  color: #fff;
  fill: #fff;
}

.container {
  flex: 1;
}
</style>
