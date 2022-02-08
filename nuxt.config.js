import postcssPresetEnv from 'postcss-preset-env'
import postcssEasingGradients from 'postcss-easing-gradients'
import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'
import fs from 'fs'

// 1
let appVersion
try {
  appVersion = fs.readFileSync('./.version', 'utf8')
} catch (err) {
  appVersion = 'dev'
}

// 2
let appLastUpdatedAt
try {
  appLastUpdatedAt = fs.readFileSync('./.last-updated-at', 'utf8')
} catch (err) {
  appLastUpdatedAt = new Date()
}

export default {
  target: 'static',
  components: true,
  generate: {
    fallback: true
  },
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'de-DE'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'de',  // it sets the language german
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
        media: 'print',
        onload: `this.media='all'`
      }
    ], // ? Imports the font 'Inter', can be optimized by the netlify plugin 'Subfont' by uncommenting it in `netlify.toml`
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">'
      }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/LoadingBar.vue',
  loadingIndicator: {
    name: 'nuxt',
    color: '#3B8070',
    background: 'white'
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-content-placeholders.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/pwa',
    '@nuxtjs/moment',
    '@nuxt/image'
  ],
  moment: {
    defaultLocale: 'de',
    locales: ['de'],
    timezone: true,
    defaultTimezone: 'Europe/Berlin'
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', 'nuxt-purgecss', '@nuxtjs/axios'],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false
          }
        }),
        'postcss-easing-gradients': postcssEasingGradients
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content'
  },
  tailwindcss: {
    viewer: false, // disabled because it causes `Error: Cannot find module 'tailwindcss/resolveConfig'`, fixed in https://github.com/nuxt-community/tailwindcss-module/pull/303
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    // ? Safelisting docs: https://purgecss.com/safelisting.html
    safelist: {
      // standard: [],
      deep: [/dark/, /light/, /btn/, /icon/, /main/],
      greedy: [
        /^card/,
        /image$/,
        /title$/,
        /^nuxt-content/,
        /code/,
        /pre/,
        /token/,
        /^vue-content-placeholders/
      ]
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax'
      }
    }
  },
  pwa: {
    icon: {
      source: 'static/icon.png',
      fileName: 'icon.png'
    },
    manifest: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      short_name: 'David Schubert', // maximum of 12 characters
      description: SITE_INFO.sitedescription || process.env.npm_package_description || '',
      lang: process.env.lang,
      dir: 'ltr'
    },
    meta: {
      author: 'David Schubert',
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      ogHost: process.env.URL,
      ogImage: '/preview.jpg',
      theme_color: '#00ff00',
      appleStatusBarStyle: 'black'
    }
  },
  pageTransition: 'davsch', // assets/css/main.css
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },
  server: {
    host: '0' // default: localhost
  },
  content: {
    // Disable for security reason on CodeSandBox
    liveEdit: true
  },
  // environment variables used by nuxt. um die version auszuspielen und das letzte update datum
  publicRuntimeConfig: {
    appVersion,
    appLastUpdatedAt
  }
}
