const PAGE_NAME_LOGIN = 'login'

export default function({ store, route, redirect }) {
  const isLogin = store.getters.isAuthenticated
  const isLoginPage = route.name === PAGE_NAME_LOGIN

  console.log('>> isLogin, isLoginPage:', isLogin, isLoginPage)

  if (!isLogin && !isLoginPage) redirect('/login')
  if (isLogin && isLoginPage) redirect('/')
}
