import firebase from '~/plugins/firebase'

export default {
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  },
  logoutWithGoogle({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', { user: null })
      })
      .catch(alert)
  }
}
