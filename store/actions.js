import firebase from '~/plugins/firebase'
import formatUser from '~/assets/js/modules/format-user'

export default {
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    const onSuccess = ({ user }) => {
      const formattedUser = formatUser(user)
      commit('setUser', { user })

      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set(formattedUser)
    }

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(onSuccess)
      .catch(console.error)
  },

  logoutWithGoogle({ commit }) {
    const onSuccess = () => {
      commit('setUser', { user: null })
    }

    firebase
      .auth()
      .signOut()
      .then(onSuccess)
      .catch(console.error)
  }
}
