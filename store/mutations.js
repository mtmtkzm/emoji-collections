export default {
  setUser(state, { user }) {
    state.user = user
      ? {
          isAuthentication: true,
          id: user.uid,
          data: {
            photoURL: user.photoURL,
            displayName: user.displayName,
            email: user.email
          }
        }
      : null
  }
}
