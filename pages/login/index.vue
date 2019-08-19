<template>
  <div class="page-index">
    <span class="title-emoji">
      &#x1F606;
    </span>
    <h2>Welcome!</h2>

    <ElButton icon="el-icon-arrow-right" @click="login">
      Sign in with Google
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

<style scoped>
.page-index {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-emoji {
  font-size: 200px;
}
</style>
