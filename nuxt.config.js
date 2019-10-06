const dotenv = require('dotenv').config()
const MAPS_KEY = dotenv.parsed.MAPS_KEY
const dummyData = require('./static/dummy.json')

module.exports = {
  mode: 'spa',
  base: '/',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#7C0A27' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places&components=country:QA`
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/slick.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#7C0A27',
          secondary: '#B0824C'
        }
      }
    }
  },
  router: {
    middleware: [
      'authenticated'
    ],
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'pagesNotFound',
        path: '*',
        component: resolve(__dirname, 'pages/errors/404.vue')
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: async () => {
      const property = new Promise((resolve, reject) => {
        const rawData = dummyData.filter(itemDummy => itemDummy.type === 'property')
        resolve(rawData.map(itemRawData => `/property/${itemRawData.id}/detail`))
        reject(rawData.map(itemRawData => `/property/${itemRawData.id}/detail`))
      })

      return Promise.all([property]).then(values => {
        return values.join().split(',')
      })
    }
  }
}
