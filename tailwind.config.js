const path = require('path');

module.exports = {
    purge: [
      './dist/**/*.html',
      './dist/**/index.*.js'
    ],
    theme: {
      fontFamily: {
          quicksand: ['Quicksand', 'sans-serif'],
          body: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        'super': '1.5rem',
      },
      extend: {
        colors: {
          dark: {
            green: '#011003'
          },
          greenish: {
            white: '#EFF8F0'
          },
          nature: {
            frost: '#FAFDFA'
          }
        }
      }
    },
    variants: {},
    plugins: [],
}