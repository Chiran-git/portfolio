/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0087ff', // main theme color
          600: '#006ccb',
          700: '#005198',
          800: '#003764',
          900: '#001c32',
        },
        secondary: {
          50: '#faf0fc',
          100: '#f4e1f9',
          200: '#e9c3f3',
          300: '#dda5ed',
          400: '#c752d9', // main secondary color
          500: '#b13ac3',
          600: '#9626a7',
          700: '#771d85',
          800: '#591463',
          900: '#3b0c42',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'stronger': '0 10px 25px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'xl': '0 15px 30px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -5px rgba(0, 0, 0, 0.1)',
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0',
      DEFAULT: '0',
      'md': '0',
      'lg': '0',
      'xl': '0',
      '2xl': '0',
      '3xl': '0',
      'full': '0',
    },
  },
  plugins: [],
}

