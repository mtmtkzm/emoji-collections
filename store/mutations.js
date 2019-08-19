import formatUser from '~/assets/js/modules/format-user'

export default {
  setUser(state, { user }) {
    state.user = formatUser(user)
  }
}
