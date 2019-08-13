import firebase from '~/plugins/firebase'

export default {
  nuxtClientInit({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      commit('setUser', { user })
    })
  },
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
