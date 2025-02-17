/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        card: '#1E1E1E',
        'card-hover': '#2A2A2A',
      },
    },
  },
  plugins: [],
}
