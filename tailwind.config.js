/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Newsreader", "serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        "oat": "#F9F9F9",
        "oat-dark": "#F3F3F3",
        "oatly-blue": "#124A17",
        "primary": "#1B1B1B",
        "surface": "#F9F9F9",
        "on-surface": "#1B1B1B",
        "error": "#ba1a1a",
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
        "6": "6px"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Example custom utility
      addUtilities({
        '.custom-utility': {
          display: 'inline-block',
          padding: '0.5rem',
          backgroundColor: '#000b3f',
        },
      });
    }),
  ],
};
