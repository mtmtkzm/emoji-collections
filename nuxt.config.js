require('dotenv').config()

export default {
  mode: 'spa',
  env: {
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_DATABASE_URL: process.env.FB_DATABASE_URL,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/scss/style.scss'],
  styleResources: {
    scss: ['~/assets/scss/_vue-globals.scss']
  },
  plugins: ['~/plugins/element-ui', '~/plugins/firebase'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  router: {
    middleware: ['authenticated']
  },
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {}
  }
}
