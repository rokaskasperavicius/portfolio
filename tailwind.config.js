module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "right-full": "5px 5px 0px 0px black",
        "left-full": "-5px 5px 0px 0px black;",
      },
    },
  },
  plugins: [],
};
