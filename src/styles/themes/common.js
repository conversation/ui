import core from '../palettes/core'

export const typography = {
  // Enable v2 variants.
  // https://material-ui.com/style/typography/#migration-to-typography-v2
  useNextVariants: true,

  fontFamily: 'Noto Sans',

  h1: { fontFamily: 'Montserrat', fontWeight: 700 },
  h2: { fontFamily: 'Montserrat', fontWeight: 700 },
  h3: { fontFamily: 'Montserrat', fontWeight: 700 },
  h4: { fontFamily: 'Montserrat', fontWeight: 600 },
  h5: { fontFamily: 'Montserrat', fontWeight: 600 },
  h6: { fontFamily: 'Montserrat', fontWeight: 700 },

  body1: {
    fontFamily: 'Libre Baskerville',
    fontSize: '1rem',
    lineHeight: '1.5'
  },

  button: {
    letterSpacing: 0.25,
    textTransform: 'none'
  },

  overline: {
    letterSpacing: 0.25,
    textTransform: 'none'
  }
}

export const errorStateColours = {
  palette: {
    error: { main: core[700], border: core[600] }
  }
}
