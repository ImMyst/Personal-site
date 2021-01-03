module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E75454',
        'primary-black': '#0A0A0A',
        'primary-white': '#FCFCFC',
        'primary-lightgray': '#BBBBBB',
        'accent-grey': '#8A8A8A',
      },
      boxShadow: {
        navbar: '0px -3px 4px 0px rgba(20, 20, 20, 0.3)',
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
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
