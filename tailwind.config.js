/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-garamond)', 'var(--font-nunito)'],
      // },
      colors: {
        home: {
          main: '#FF0303',
          secondary: '#ffbc48',
          background: '#F9DBBB'
        },
        projects: {
          main: '#6d28d9',
          secondary: '#E8AA42',
          background: '#D3ECA7'
        },
        contact: {
          main: '#da434a',
          secondary: '#F8F1F1',
          background: '#895c32'
        },
        social: {
          instagram: '#E4405F',
          twitter: '#1DA1F2',
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
  safelist: [
    {
      pattern: /bg-(home|projects|contact)-(main|secondary|background)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /(decoration|text)-social-(instagram|twitter)-*/
    }
  ],
}
