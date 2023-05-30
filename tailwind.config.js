/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                hero: ['Bona Nova', ...fontFamily.serif],
                sans: ['DM Sans', ...fontFamily.sans],
                title: ['Domine', ...fontFamily.serif],
            },
            colors: {
                primary: '#1A4039',
                secondary: '#3F7666',
                body: '#535353',
                bodyLight: '#6F6F6F',
                background: '#FEF7EF',
                backgroundVariant: '#F4E9DD',
                divider: '#E5E5E5',
            },
        },
    },
    plugins: [],
};
