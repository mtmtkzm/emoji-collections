export default {
  mode: 'spa',
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
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: ['~/plugins/element-ui', '~/plugins/firebase'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    [
      'nuxt-env',
      {
        keys: [
          { key: 'FB_API_KEY' },
          { key: 'FB_AUTH_DOMAIN' },
          { key: 'FB_DATABASE_URL' },
          { key: 'FB_PROJECT_ID' },
          { key: 'FB_STORAGE_BUCKET' },
          { key: 'FB_MESSAGING_SENDER_ID' },
          { key: 'FB_APP_ID' }
        ]
      }
    ]
  ],
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {}
  }
}
