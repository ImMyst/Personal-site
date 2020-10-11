module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#4ECDC4',
        secondary: '#355C7D',
        accent: '#FF6B6B',
        text: '#F7FFF7',
        dark: '#081121',
        'dark-light': '#11203C'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      margin: {
        88: '22rem'
      },
      opacity: {
        10: '0.1'
      }
    },
    fontFamily: {
      calibre: ['Calibre', 'sans-serif'],
      'calibre-black': ['Calibre-Black', 'sans-serif'],
      'calibre-bold': ['Calibre-Bold', 'sans-serif'],
      'calibre-light': ['Calibre-Light', 'sans-serif'],
      'calibre-medium': ['Calibre-Medium', 'sans-serif'],
      'calibre-semibold': ['Calibre-Semibold', 'sans-serif'],
      'calibre-thin': ['Calibre-Thin', 'sans-serif']
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    textOpacity: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true
  }
}
