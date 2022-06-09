const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{html,js}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        primaryC: "#FFFF",
        secondaryC: "#f7f9fb",
        shC: "#64748B",
        ghC: "#475569",
        phC: "#F1F5F9",
        pcC: "#1E293B",
        fC: "#334155",
        dPrimary: "#0e1526",
        dSecondary: "#1c2739",
        dHeading: "#18142c",
        dHeadingC: "#94A3B8",
      },
      height: {
        100: "50rem",
      },
    },
    colors: colors,
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      xll: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      smm: { max: "415px" },
      // => @media (max-width: 415px) { ... }
    },
  },
  plugins: [],
};
