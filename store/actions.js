import firebase from '~/plugins/firebase'

export default {
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    const onSuccess = ({ user }) => {
      commit('setUser', { user })
      window.location.href = '/'
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
      window.location.href = '/login'
    }

    firebase
      .auth()
      .signOut()
      .then(onSuccess)
      .catch(console.error)
  },

  // user object にある絵文字一覧を取得
  async getUserEmojis({ commit }, { userId }) {
    const list = await firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('emojis')
      .get()
      .then(snapshot => {
        const emojis = []
        snapshot.forEach(doc => emojis.push(doc.data()))
        return emojis
      })

    commit('setUserEmojiList', { list })
  }
}
