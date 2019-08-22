<template>
  <div class="layouts-default">
    <div class="sidebar">
      <span class="el-icon-picture-outline-round"></span>
      <p>LOGO</p>
    </div>
    <div class="container">
      <TheHeader class="header" :user="user" />
      <main class="main">
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
  padding: 30px 10px;
  background-color: #000;
  color: #fff;
  fill: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 40px;
  }
}

.container {
  flex: 1;
  padding: 10px;
}

.main {
  padding: 20px;
}
</style>
