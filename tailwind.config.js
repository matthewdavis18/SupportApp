module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
  },
  extend: {},

  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  // ...],
};
