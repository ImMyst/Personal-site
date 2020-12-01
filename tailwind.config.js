module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-black': '#0A0A0A',
        'primary-white': '#FCFCFC',
        'accent-grey': '#8A8A8A',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      animation: {
        'fade-in': 'fade-in 0.2s',
        'fade-out': 'fade-out 0.2s',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'fade-out': {
          from: {
            opacity: '1',
          },
          to: {
            opacity: '0',
          },
        },
      },
    },
    variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
    experimental: {
      applyComplexClasses: true,
    },
  },
};
