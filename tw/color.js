const Color = require('color');

/**
 * @name getClosest
 * @abstract Given a number, returns the index of the nearest value in a range.
 * @param {number} num - any number
 * @param {number[]} range - an array of numbers
 * @returns {number}
 */

function getClosest(num, range) {
  let closest = range.reduce((prev, curr) => {
    return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
  });
  return range.indexOf(closest);
}

/**
 * @name makeScale
 * @abstract Extracts the hue+saturation of a given hex color and
 * returns an array of hex values with the same hue+saturation scaled
 * across 10 luminostiy values. The provided hex value will be inserted
 * to the closest luminostiry step, replacing the generated value.
 * @param {string} hex - hex value of input color
 * @returns {Object} 10 shades of matching hue with scaled lightness.
 */

function makeScale(hex) {
  // reference colors
  const gray = {
    50: '#f6f6f6',
    100: '#eeeeee',
    200: '#dfe0e0',
    300: '#babcbe',
    400: '#98999b',
    500: '#808080',
    600: '#6a6a6a',
    700: '#5b5b5b',
    800: '#4a4a4a',
    900: '#333333',
  };
  // hsl lightness of each value.
  const luminosityMap = Object.values(gray).map((i) =>
    Color(i).lightness().toFixed(1)
  );

  // create Color object from input
  let base = Color(hex);
  // extract hue and saturation
  let [hue, sat, lum] = base.hsl().array();
  // where does the provided color go on our output list?
  let selfIndex = getClosest(lum, luminosityMap);
  // map over them and apply our base luminosity.
  const output = {};
  luminosityMap.map((l, idx) => {
    // get a hex color by combining our base hue+saturation with this luminosity step
    let impliedColor = Color.hsl([hue, sat, parseInt(l)]);
    // insert the provided color instead if this is the nearest match luminosity.
    let val = idx === selfIndex ? hex : impliedColor.hex();
    // Hack to start at 50 then iterate by 100.
    let key = idx === 0 ? 50 : idx * 100;
    Object.assign(output, {
      [key]: val,
    });
  });
  return output;
}

/**
 * Create an object with contrast ranges of our base colors.
 */
const colors = {
  gray: {
    50: '#f6f6f6',
    100: '#eeeeee',
    200: '#dfe0e0',
    300: '#babcbe',
    400: '#98999b',
    500: '#808080',
    600: '#6a6a6a',
    700: '#5b5b5b',
    800: '#4a4a4a',
    900: '#333333',
  },
  blue: makeScale('#005ba8'),
  sky: makeScale('#2c90cc'),
  navy: makeScale('#003468'),
  yellow: makeScale('#ffc20e'),
  amber: makeScale('#EB9114'),
  red: makeScale('#c33a00'),
  green: makeScale('#e3fad1'),
  emerald: makeScale('#0d8240'),
  teal: makeScale('#00aaa8'),
  fuschia: makeScale('#8c1d58'),
};

/**
 * Re-export our colors with a few aliased names
 */
const extendedColors = {
  ...colors,
  cerulean: colors.sky,
  saffron: colors.amber,
  gold: colors.yellow,
  meadow: colors.green,
  jungle: colors.emerald,
  ocean: colors.teal,
};

module.exports = {
  colors,
  extendedColors,
};
