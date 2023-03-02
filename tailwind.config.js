module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B1A482', // #ff5208 #432444 #B1A482
      },
      boxShadow: {
        'right-full': '5px 5px 0px 0px black',
        'left-full': '-5px 5px 0px 0px black;',
        '3xl': '1px 1px 10px 0px black',
      },
    },
  },
  plugins: [],
}
