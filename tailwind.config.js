module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Great Vibes': [],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.amber,
      fuchsia: colors.fuchsia,
      purple: colors.purple
    },
  },
}
// module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         'hero-pattern': "url('/public/Luxbg.jpg')",
//         'footer-texture': "url('/img/footer-texture.png')",
//       }
//     }
//   }
// }
