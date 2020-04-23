/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand']
      },
      colors: {
        'primary-blue': '#355C7D',
        'secondary-red': '#F67280',
        'accent-purple': '#6C5B7B',
        'lighter-red': '#C06C85'
      }
    }
  },
  corePlugins: {
    container: false,
  },
  variants: {
    fill: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
