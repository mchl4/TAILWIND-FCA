/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        pula: "#e74737",
        berde: "#28941e",
        malabo: "#f2f2f2",
        dilaw: "#fcb900",
        bleu: "#3b5897",
      }
      
    },
  },
  plugins: [],
}