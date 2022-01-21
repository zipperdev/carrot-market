module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", "sans-serif"]
      }
    },
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/forms")],
}
