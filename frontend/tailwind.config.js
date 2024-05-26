/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  safelist: [
   
  ],
  theme: {
    extend: {
      writingMode: {
        vertical: "vertical-rl",
      },
      colors: {
        glassEffect_c: "rgb(255 255 255)",
        bodytext_color: "#373D41",
       
      },
      fontFamily: {
        primery_font: "Roboto",
      },
    },
  },
  plugins: [],
};
