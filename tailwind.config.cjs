const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '2xs': '.65rem',
                '3xs': '.5rem',
            },
            screens: {
                '2xl': '1920px',
                'xl': '1600px',
                '2lg': '1280px',
                'xs': '360px',
                'iphonePro': '376px',
                'tablet': '429px',
            },
            dropShadow: {
                'ipad': '20px 20px 20px rgba(0, 0, 0, 0.3)',
            },
            colors: {
                'hero_gradient_1': '#49D1E3',
                'hero_gradient_2': '#2782FF',
                'web3-body': '#ABC8E3',
                'web3-bg': '#383C4B',
                'web3-grid': '#444859',
                'footer-dark': "#272933",
                'footer-button': "#383C4B",
                'footer-button-text': "#BDC7E1",
                'footer-button-hover': "#575C72",
                'footer-button-hover-text': "#DEEEFF",
            },
        },
    },
    plugins: [],
}
