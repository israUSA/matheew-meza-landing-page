// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        '[data-theme="light"]': {
          '--color-primary': theme('colors.pink.500'),
          '--color-secondary': theme('colors.indigo.500'),
          '--color-text': theme('colors.gray.900'),
          '--color-text-offset': theme('colors.gray.600'),
          '--color-background': theme('colors.gray.50'),
          '--color-background-offset': theme('colors.gray.100'),
          '--color-border': `rgba(${theme('colors.gray.900').replace('#', '')}, 0.1)`,
        },
        '[data-theme="dark"]': {
          '--color-primary': theme('colors.pink.400'),
          '--color-secondary': theme('colors.indigo.400'),
          '--color-text': theme('colors.gray.50'),
          '--color-text-offset': theme('colors.gray.400'),
          '--color-background': theme('colors.gray.900'),
          '--color-background-offset': theme('colors.gray.800'),
          '--color-border': `rgba(${theme('colors.gray.50').replace('#', '')}, 0.1)`,
        },
      });
    },
  ],
};