const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./color').colors;

module.exports = {
  // https://www.figma.com/file/s6JUhCoI4VK6RGNyDFWc2z/%F0%9F%A7%B0-PRISM-Component-Library
  screens: {
    // source: https://prism.coxautoinc.com/foundation/grid/grid--usage
    xs: '480px',
    sm: '680px',
    md: '960px',
    lg: '1168px',
    xl: '1360px',
    '2xl': '1460px',
  },
  maxWidth: {
    // source: https://prism.coxautoinc.com/foundation/grid/grid--usage
    xs: '24.5rem', // 392px
    sm: '36.5rem', // 584px
    md: '49rem', // 784px
    lg: '61rem', // 976px
    xl: '73rem', // 1168px
    '2xl': '85rem', // 1360px
  },
  spacing: {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.5rem',
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 0 0.4rem #babcbe',
    // DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },
  fontFamily: {
    // source: https://prism.coxautoinc.com/foundation/typography/typography--usage
    sans: ['Roboto', ...defaultTheme.fontFamily.sans],
    alt: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
    serif: ['Merriweather', 'serif'],
  },
  colors: ({ theme }) => ({
    // source: https://prism.coxautoinc.com/foundation/colors/colors
    accent: '#ff5ba8',
    navy: '#003468',
    'navy-dark': '#001b35',
    primary: '#005ba8',
    'primary-dark': '#004986',
    'cerulean-light': '#c1dff2',
    cerulean: '#2c90cc',
    'cerulean-dark': '#2372a2',
    'gold-light': '#fff0c3',
    gold: '#ffc20e',
    'gold-dark': '#ebb000',
    'meadow-light': '#e3fad1',
    ...colors,
    cerulean: colors.sky,
    saffron: colors.amber,
    gold: colors.yellow,
    meadow: colors.green,
    jungle: colors.emerald,
    ocean: colors.teal,
    headings: colors.blue['800'],
    links: theme.colors.sky['700'],
    body: theme.colors.gray['800'],
    muted: theme.colors.gray['400'],
  }),
  // This will set the color for `.border` out of the box.
  borderColor: ({ theme }) => ({
    ...theme('colors'),
    // #babcbe
    DEFAULT: theme('colors.gray.300', 'currentColor'),
  }),
  borderOpacity: ({ theme }) => theme('opacity'),
  borderRadius: {
    lg: '7px',
    sm: '4px',
    xs: '2px',
  },
  fontSize: {
    // source: https://prism.coxautoinc.com/foundation/typography/typography--usage
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '22px',
    '3xl': '26px',
    xxs: ['10px', { lineHeight: '13px' }],
    xs: ['12px', { lineHeight: '15px' }],
    sm: ['14px', { lineHeight: '18px' }],
    base: ['16px', { lineHeight: '20px' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }],
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
};
