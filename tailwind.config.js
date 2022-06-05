const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{html,js}"],
  },
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        primaryC: "#FFFF",
        secondaryC: "#f7f9fb",
        shC: "#64748B",
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

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
