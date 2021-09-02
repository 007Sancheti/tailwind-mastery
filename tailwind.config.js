const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.{html,js}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    presets: [require('./preset/tailwind.preset')],
};
