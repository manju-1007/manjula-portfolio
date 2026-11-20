/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#0b0816',
          900: '#130e26',
          800: '#1e163b',
        },
        lavender: {
          50: '#faf7fc',
          100: '#f3ebfa',
          200: '#e6d5f5',
          500: '#a855f7',
          600: '#9333ea',
        }
      }
    },
  },
  plugins: [],
}
