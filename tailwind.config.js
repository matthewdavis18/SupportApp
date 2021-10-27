module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}",
  ],
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
