<template>
  <div class="page-index">
    <h2>Create My Account</h2>

    <ElButton icon="el-icon-arrow-right" @click="login">
      Create My Account
    </ElButton>
  </div>
</template>

<script>
export default {
  methods: {
    login: function() {
      this.$store.dispatch('loginWithGoogle')
    }
  }
}
</script>
