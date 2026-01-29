/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FIXED: Changed primary from bright pink to dark void color
        primary: "#0a0118", // Deep void background (was likely #ff0055 or similar)
        secondary: "#a0a0a0",
        tertiary: "#1a0f2e",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // Neon accent colors
        "acid-lime": "#d2ff00",
        "neon-pink": "#ff0055",
        "neon-cyan": "#00f3ff",
        "deep-purple": "#6200ff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "neon-lime": "0 0 20px rgba(210, 255, 0, 0.5)",
        "neon-pink": "0 0 20px rgba(255, 0, 85, 0.5)",
        "neon-cyan": "0 0 20px rgba(0, 243, 255, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};