/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkgray': 'hsl(0, 0%, 12%)',
      'green': 'hsl(75, 94%, 57%)',
      'gray': 'hsl(0, 0%, 20%)',
    },
    extend: {},
  },
  plugins: [],
}