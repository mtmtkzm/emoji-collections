<template>
  <div class="page-index">
    <h2>Create My Account</h2>

    <ElButton icon="el-icon-arrow-right" @click="login">
      Create My Account
    </ElButton>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    login: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>
