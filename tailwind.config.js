/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
      colors: {
        pukpink: {
          '100': '#F68AFF',
          '200': '#FC67F6',
          '300': '#F946DD',
          '400': '#F526BC',
          DEFAULT: '#F00895',
          '600': '#D70083',
          '700': '#B1006F',
          '800': '#8A005A',
          '900': '#640043'
        },
        puklightblue: {
          '100': '#C4F0E3',
          '200': '#B4EBE1',
          '300': '#A3E6E1',
          '400': '#94DDE0',
          DEFAULT: '#84CCDA',
          '600': '#6CB1BD',
          '700': '#55949F',
          '800': '#3F767F',
          '900': '#2B575D'
        },
        pukyellow: {
          '100': '#F8C291',
          '200': '#F4BF73',
          '300': '#EFC355',
          '400': '#E9CB38',
          DEFAULT: '#E3D81C',
          '600': '#CBBF0E',
          '700': '#AEA203',
          '800': '#8A8300',
          '900': '#646100'
        },
        gray: {
          '50': 'var(--color-gray-50)', // #F9FAFB
          '100': 'var(--color-gray-100)', // #F3F4F6
          '200': 'var(--color-gray-200)', // #E5E7EB
          '300': 'var(--color-gray-300)', // #D1D5DB
          '400': 'var(--color-gray-400)', // #9CA3AF
          DEFAULT: 'var(--color-gray)', // #6B7280
          '600': 'var(--color-gray-600)', // #4B5563
          '700': 'var(--color-gray-700)', // #374151
          '800': 'var(--color-gray-800)', // #1F2937
          '900': 'var(--color-gray-900)' // #111827
        },
        primary: {
          '100': 'var(--color-primary-100)', // #ECEFF5
          '200': 'var(--color-primary-200)', // #C3CBDC
          '300': 'var(--color-primary-300)', // #9BA8C2
          '400': 'var(--color-primary-400)', // #7686A6
          DEFAULT: 'var(--color-primary)', // #526488
          '600': 'var(--color-primary-600)', // #3E4F70
          '700': 'var(--color-primary-700)', // #2C3A57
          '800': 'var(--color-primary-800)', // #1C263B
          '900': 'var(--color-primary-900)' // #0D131E
        }
      },
      screens: {
        xs: '480px' // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    }
  }
}
