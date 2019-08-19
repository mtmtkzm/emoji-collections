export default function(user) {
  return user
    ? {
        id: user.uid,
        data: {
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email
        }
      }
    : null
}
