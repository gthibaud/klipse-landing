/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-dm-sans)', ...fontFamily.sans],
                title: ['var(--font-sora)', ...fontFamily.sans],
            },
            colors: {
                primary: '#0F1F37',
                blue: '#0079FF',
                purple: '#945FFE',
            },
        },
    },
    plugins: [],
};
