/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ringWidth: {
        '1': '1px',
        '2': '2px',
      },
    },
  },
  plugins: [],
}

