module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['ABC Normal'],
        mono: ['BB Studio Mono'],
      },
      colors: {
        red: '#FF3600',
      },
      minHeight: {
        'screen-plus': 'calc(100vh + 4rem)',
      },
      fontSize: {
        xs: '0.5rem',
        sm: '0.8rem',
        '3xl': '1.9475rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
