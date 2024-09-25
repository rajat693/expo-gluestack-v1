import { createStyle } from '@gluestack-style/react';

export const Text = createStyle({
  color: '$textLight700',
  _dark: {
    color: '$textDark200',
  },
  fontWeight: '$normal',
  fontFamily: '$body',
  fontStyle: 'normal',
  letterSpacing: '$md',

  variants: {
    isTruncated: {
      true: {
        props: {
          // @ts-ignore
          numberOfLines: 1,
          ellipsizeMode: 'tail',
        },
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
    strikeThrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    sub: {
      true: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    highlight: {
      true: {
        bg: '$yellow500',
      },
    },
    size: {
      'micro': {
        fontSize: '$2xs',
        lineHeight: '$2xs',
      },
      'mili': {
        fontSize: '$xs',
        lineHeight: '$sm',
      },

      'centi': {
        fontSize: '$sm',
        lineHeight: '$sm',
      },

      'deci': {
        fontSize: '$md',
        lineHeight: '$md',
      },

      'hecto': {
        fontSize: '$lg',
        lineHeight: '$xl',
      },

      'kilo': {
        fontSize: '$xl',
        lineHeight: '$xl',
      },

      'mega': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },

      'giga': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },

      'tera': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },

      'peta': {
        fontSize: '$5xl',
        lineHeight: '$6xl',
      },

      'exa': {
        fontSize: '$6xl',
        lineHeight: '$7xl',
      },
    },
  },

  defaultProps: {
    size: 'md',
  },
});
