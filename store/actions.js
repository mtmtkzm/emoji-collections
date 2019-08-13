import firebase from '~/plugins/firebase'

export default {
  nuxtClientInit({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      commit('setUser', { user })
    })
  },
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
}
