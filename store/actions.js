import firebase from '~/plugins/firebase'

export default {
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const user = result.user
        commit('setUser', { user })
      })
      .catch(error => {
        console.error(error)
      })
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
