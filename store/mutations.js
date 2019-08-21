import formatUser from '~/assets/js/modules/format-user'

export default {
  setUser(state, { user }) {
    state.user = formatUser(user)
  },

  setUserEmojiList(state, { list }) {
    state.user.emojis = list
  }
}
