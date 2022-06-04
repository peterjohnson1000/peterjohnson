module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{html,js}"],
  },
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
    colors: {
      primary: "#FFFF",
      secondary: "#f7f9fb",
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
