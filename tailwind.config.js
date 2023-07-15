/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#FF7979',
        green: '#38CCBB',
        blue: {
          DEFAULT: '#5E54A4',
          dark: '#3D3B48'
        },
      },
    },
  },
  plugins: [],
}

