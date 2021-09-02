const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      colors: {
        'regal-blue': '#243c5a'
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scale-1': {
          transform: 'scale(1)'
        }
      }
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover']
      })
    })
  ]
}
