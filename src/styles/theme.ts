export const theme = {
  colors: {
    primary: '#000000',
    darkText: '#333333',
    secondary: '#DC143C',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkerGray: '#AAAAAA',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif;",
    },
    sizes: {
      small: '.8rem',
      xsmall: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)', // "menor do que 768px"
    lteXSmall: '(max-width: 550px)', // "menor do que 550px"
    lteSmall: '(max-width: 414px)', // "menor do que 414px"
    gteLarge: '(min-width: 1024px)', // maior do que 1024px
  },
  spacings: {
    small: '.8rem',
    xsmall: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  sizes: {
    max: '96rem',
    content: '80rem',
  },
} as const;
