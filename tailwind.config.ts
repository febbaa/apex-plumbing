import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f2137',
        'navy-light': '#162840',
        orange: {
          DEFAULT: '#f97316',
          hover: '#ea6c0a',
        },
        'gray-text': '#94a3b8',
        'light-bg': '#f8fafc',
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
