<template>
  <div class="page-index">
    <h2>Create My Account</h2>

    <ElButton icon="el-icon-arrow-right" @click="login">
      Create My Account
    </ElButton>

    {{ userData }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      userData: null
    }
  },
  methods: {
    login: function() {
      this.$store.dispatch('loginWithGoogle')
    }
  }
}
</script>
