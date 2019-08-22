export default {
  isAuthenticated(state) {
    return !!state.user
  },
  userEmojiList(state) {
    return state.user ? state.user.emojis : []
  }
}
