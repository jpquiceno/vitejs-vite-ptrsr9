const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function (
  options = {
    strategy: undefined,
    prefix: undefined,
    parent: undefined,
  }
) {
  return function ({ addBase, addComponents, theme }) {
    const strategy =
      options.strategy === undefined ? ['base', 'class'] : [options.strategy];
    const prefix = options.prefix === undefined ? 'prism-' : options.prefix;
    const parent = options.parent ? `${options.parent} ` : '';

    function withPrefix(classArr) {
      return classArr.map((cls) => `${parent}.${prefix}${cls}`);
    }

    const rules = [
      {
        base: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        class: [`${parent}*[class*=heading-]`],
        styles: {
          color: theme('colors.headings'),
        },
      },
      {
        base: ['h1'],
        class: withPrefix(['heading-1']),
        styles: {
          fontFamily: theme('fontFamily.alt'),
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
          textTransform: 'uppercase',
        },
      },
      {
        base: ['h2'],
        class: withPrefix(['heading-2']),
        styles: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.medium'),
        },
      },
      {
        base: ['h3'],
        class: withPrefix(['heading-3']),
        styles: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.normal'),
        },
      },
      {
        base: ['h4'],
        class: withPrefix(['heading-4']),
        styles: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.light'),
        },
      },
      {
        base: ['h5'],
        class: withPrefix(['heading-5']),
        styles: {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.bold'),
        },
      },
      {
        base: ['h6'],
        class: withPrefix(['heading-6']),
        styles: {
          fontSize: theme('fontSize.xs'),
          textTransform: 'uppercase',
          fontWeight: theme('fontWeight.semibold'),
        },
      },
      {
        base: ['button', 'input[type="button"]'],
        class: [`*[class^=${prefix}btn]`, `.${prefix}btn`],
        styles: {
          // fontWeight: theme('fontWeight.bold'),
          // textTransform: 'uppercase',
          // borderRadius: theme('borderRadius.sm'),
          // padding: theme('spacing.2'),
          // paddingLeft: theme('spacing.4'),
          // paddingRight: theme('spacing.4'),
          // backgroundColor: 'transparent',
          // color: theme('colors.sky.600'),
          // outline: 'none',
          // border: 'none',
          // borderColor: 'transparent',
          // whiteSpace: 'nowrap',
          // textOverflow: 'ellipses',
          // overflow: 'hidden',
          // cursor: 'pointer',
          // '&:focus-within': {
          //   boxShadow: theme('boxShadow.lg'),
          // },
          // '&.outline': {
          //   borderColor: theme('colors.sky.600'),
          //   outlineWidth: '1px',
          // },
          // '&.fill': {
          //   backgroundColor: theme('colors.navy.900'),
          //   color: theme('colors.white'),
          // },
          // '&:hover:not(:disabled):not([type="submit"]), &.active': {
          //   backgroundColor: theme('colors.cerulean-light'),
          //   color: theme('colors.sky.600'),
          // },
          // '&:disabled': {
          //   cursor: 'not-allowed',
          //   backgroundColor: theme('colors.gray.700'),
          //   color: theme('colors.white'),
          // },
          // '&[type="submit"]': {
          //   backgroundColor: theme('colors.gold.500'),
          //   color: theme('colors.gray.900'),
          //   '&:hover': {
          //     backgroundColor: theme('colors.gold.600'),
          //   },
          // },
        },
      },
    ].map((rule) => ({
      ...rule,
      base: rule.base.map((b) => `${parent}${b}`),
    }));

    const getStrategyRules = (stratName) =>
      rules
        .map((rule) => {
          if (rule[stratName] === null) return null;
          return { [rule[stratName]]: rule.styles };
        })
        .filter(Boolean);

    if (strategy.includes('base')) {
      addBase(getStrategyRules('base'));
    }

    if (strategy.includes('class')) {
      addComponents(getStrategyRules('class'));
    }

    addBase({
      [':root']: {
        '--tw-border': `1px solid ${theme('borderColor.DEFAULT')}`,
      },
    });

    addComponents({
      // Headings -------------------------
      [`.${prefix}dialog-frame`]: {
        position: 'fixed',
        zIndex: 10,
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        overflowY: 'auto',
      },
      [`.${prefix}dialog-backdrop`]: {
        display: 'flex',
        'justify-content': 'center',
        'min-height': '100vh',
        'align-items': 'center',
      },
      [`.${prefix}dialog-overlay`]: {
        '--tw-bg-opacity': '1',
        bottom: '0',
        left: '0',
        opacity: '.25',
        position: 'fixed',
        right: '0',
        top: '0',
        'background-color': 'rgb(0 0 0/var(--tw-bg-opacity))',
      },
      [`.${prefix}dialog-box`]: {
        'margin-left': 'auto',
        'margin-right': 'auto',
        position: 'relative',
        padding: theme('spacing.8'),
        width: theme('spacing.96'),
        maxWidth: '90%',
        borderRadius: theme('borderRadius.DEFAULT'),
        boxShadow: theme('boxShadow.sm'),
        borderWidth: theme('borderWidth.DEFAULT'),
        backgroundColor: theme('colors.white'),
      },
      [`*[class^=${prefix}caption]`]: {
        color: theme('colors.muted'),
      },
      [`.${prefix}caption, .${prefix}caption-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.lg'),
      },
      [`.${prefix}caption-xs`]: {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.base'),
      },
      [`*[class^=${prefix}prose]`]: {
        color: theme('colors.body'),
        '--tw-space-y-reverse': '0!important',
        '--tw-prose-rhythm': theme('spacing[4]'),
        '>:not([hidden])~:not([hidden])': {
          'margin-bottom':
            'calc(var(--tw-prose-rhythm)*var(--tw-space-y-reverse))!important',
          'margin-top':
            'calc(var(--tw-prose-rhythm)*(1 - var(--tw-space-y-reverse)))!important',
        },
      },
      [`.${prefix}prose`]: {
        fontSize: theme('fontSize.base'),
        lineHeight: theme('fontSize.2xl'),
      },
      [`.${prefix}prose-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.xl'),
      },
      [`.${prefix}prose-xs`]: {
        '--tw-prose-rhythm': theme('spacing.2'),
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.lg'),
      },
      [`.${prefix}prose-xxs`]: {
        '--tw-prose-rhythm': theme('spacing[1.5]'),
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('fontSize.md'),
      },
      [`*[class^=${prefix}link]`]: {
        color: theme('colors.links'),
      },
      [`.${prefix}link`]: {
        fontSize: theme('fontSize.base'),
        fontWeight: theme('fontWeight.medium'),
      },
      [`.${prefix}link-sm`]: {
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium'),
      },
      [`.${prefix}link-xs`]: {
        fontSize: theme('fontSize.xs'),
        fontWeight: theme('fontWeight.normal'),
        textDecoration: 'underline',
      },
      [`.${prefix}link-xxs`]: {
        fontSize: theme('fontSize.xxs'),
        color: theme('colors.muted'),
        textDecoration: 'underline',
      },
      [`*[class^=${prefix}list]`]: {
        listStyle: 'disc',
        listStylePosition: 'inside',
        paddingLeft: theme('spacing.4'),
        'li > ul, li > ol': {
          paddingTop: theme('spacing[0.5]'),
        },
      },
      [`.${prefix}def`]: {
        dt: {
          fontSize: theme('fontSize.xs'),
          color: theme('colors.muted'),
        },
        dd: {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('fontSize.lg'),
        },
        'dd + dt': {
          marginTop: theme('spacing.2'),
        },
      },

      [`.${prefix}combobox`]: {
        borderRadius: theme('borderRadius.xs'),
        position: 'relative',
        '&:focus-within': {
          boxShadow: theme('boxShadow.DEFAULT'),
        },
        [`.${prefix}input`]: {
          width: '100%',
        },
      },
      [`.${prefix}menu`]: {
        width: '100%',
        backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.xs'),
        boxShadow: theme('boxShadow.sm'),
        borderWidth: theme('borderWidth.DEFAULT'),
        marginTop: '-1px',
      },

      [`.${prefix}menu-item, ${prefix}menu option`]: {
        padding: theme('spacing.2'),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme('spacing.2'),
        backgroundColor: theme('colors.white'),
        color: theme('colors.body'),
        '&.active, &:hover': {
          backgroundColor: theme('colors.blue.800'),
          color: theme('colors.white'),
        },
        '&.selected': {
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.black'),
        },
      },

      [`.${prefix}table, .prism table`]: {
        ['tr,td,thead,th']: {
          borderColor: theme('colors.gray.300'),
          borderWidth: '1px',
          borderStyle: 'solid',
          padding: theme('spacing.3'),
        },
        th: {
          backgroundColor: theme('colors.blue.800'),
          borderColor: theme('colors.blue.800'),
          color: theme('colors.white'),
          borderWidth: '1px',
          borderStyle: 'solid',
        },
        'caption,tfoot': {
          fontStyle: 'italic',
          padding: theme('spacing.2'),
          color: theme('colors.muted'),
          fontSize: theme('fontSize.sm'),
        },
      },

      [`.${prefix}label, .${prefix}form-control`]: {
        fontSize: theme('fontSize.sm'),
        color: theme('colors.gray.400'),
        display: 'flex',
        flexDirection: 'column',
        '&.inline': {
          flexDirection: 'row',
          gap: theme('spacing.2'),
        },
      },
      [`.${prefix}label-xs`]: {
        fontSize: theme('fontSize.xs'),
        color: theme('colors.gray.400'),
      },
      // Input Box ---------------------------------
      [`.${prefix}select`]: {
        borderColor: theme('colors.gray.300'),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme('borderRadius.xs'),
        outline: 'none',
        backgroundColor: theme('colors.white'),
        padding: theme('spacing[2.5]'),
        backgroundPositionY: '-40px',
      },
      [`.${prefix}input, ${prefix}select, .prism input:not([type='button']):not([type='submit']):not([type='reset'])`]:
        {
          borderColor: theme('colors.gray.300'),
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: theme('borderRadius.xs'),
          outline: 'none',
          backgroundColor: theme('colors.white'),
          padding: theme('spacing[2.5]'),
          fontSize: theme('fontSize.base'),
          '&::placeholder': {
            color: theme('colors.gray.400'),
          },
          '&:focus': {
            boxShadow: theme('boxShadow.sm'),
            outline: 'none',
          },
          '&:focus-within': {
            boxShadow: theme('boxShadow.lg'),
            outline: 'none',
          },
        },
    });
  };
});
