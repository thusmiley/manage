/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        container: "var(--container-w)",
        containerLeft: "var(--container-w-l)",
      },
      colors: {
        primary: "#F3603C",
        secondary: "#242D52",
        almostBlack: "#1D1E25",
        lightOrange: "#FFF0EC",
      },
      fontFamily: {
        beVietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1400px",
        xxl: "2300px",
      },
    },
  },
  plugins: [],
};
