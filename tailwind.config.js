/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        robo: ['Roboto'],
        popi: ['Poppins']
      },
      colors: {
        primary: "#541554",
        secondary: "#F4EDE4",
        primaryDark: "#4a154b",
      }
    },
  },
  plugins: [],
}

