const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/components/**/*.{js,tsx}',
    './nextra-theme-docs/**/*.{js,tsx}',
    './src/pages/**/*.{md,mdx,tsx}',
    './theme.config.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        dark: '#000',
        gray: colors.neutral,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
        'pink-gradient-start': 'rgba(255, 30, 86, 1)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        betterhover: { raw: '(hover: hover)' },
      },
    },
  },
  darkMode: 'class',
};
