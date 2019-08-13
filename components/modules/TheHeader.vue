<template>
  <header class="the-header">
    <div v-if="user">
      <p>ようこそ、{{ user.data.displayName }} さん</p>
      <button @click="logout">logout?</button>
    </div>

    <div v-else>
      <NuxtLink to="/login">login?</NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logoutWithGoogle')
    }
  }
}
</script>

<style>
.the-header {
  width: 100%;
  background-color: gray;
}
</style>
