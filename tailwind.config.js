module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './tw/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: require('./tw/theme'),
  },
  plugins: [
    require('./tw/plugin')({
      parent: '',
      strategy: 'class',
    }),
  ],
};
