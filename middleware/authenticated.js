import firebase from '~/plugins/firebase'
const PAGE_NAME_LOGIN = 'login'

export default async function({ store, route, redirect }) {
  const user = await new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => resolve(user))
  })

  store.commit('setUser', { user })

  const isLogin = store.getters.isAuthenticated
  const isLoginPage = route.name === PAGE_NAME_LOGIN

  console.log('>> isLogin, isLoginPage:', isLogin, isLoginPage)

  if (!isLogin && !isLoginPage) redirect('/login')
  if (isLogin && isLoginPage) redirect('/')
}
