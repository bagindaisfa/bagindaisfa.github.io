/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#8b5cf6",
      },
      boxShadow: {
        glow: "0 0 25px rgba(139,92,246,0.45)",
      },
    },
  },
  plugins: [],
};
