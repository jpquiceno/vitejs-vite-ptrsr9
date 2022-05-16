module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-extend'),
    require('postcss-apply'),
    // require('postcss-minify'),
    // require('cssnano'),
  ],
};
