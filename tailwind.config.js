module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
