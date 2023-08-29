const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                '2xl': '1920px',
                'xl': '1600px',
                '2lg': '1280px',
            },
            dropShadow: {
                'ipad': '20px 20px 20px rgba(0, 0, 0, 0.3)',
            },
            colors: {
                'hero_gradient_1': '#49D1E3',
                'hero_gradient_2': '#2782FF',
            },
        },
    },
    plugins: [],
}
