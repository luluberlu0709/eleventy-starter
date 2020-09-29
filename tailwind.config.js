module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily:{
      'sans':['Open Sans'],
      'Anton':['Anton'],
    },
    extend: {
      colors: {
        'gold': '#FFD700',
        'red' : '#BF0A30',
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        'dark': {'raw': '(prefers-color-scheme: dark)'},
        // => @media (orientation: portrait) { ... }
      }
    },
  },
  variants: {},
  plugins: [],
};
