import core from '../palettes/core'

export const typography = {
  fontFamily: 'Noto Sans',

  h1: { fontFamily: 'Montserrat', fontWeight: 700 },
  h2: { fontFamily: 'Montserrat', fontWeight: 700 },
  h3: { fontFamily: 'Montserrat', fontWeight: 700 },
  h4: { fontFamily: 'Montserrat', fontWeight: 600 },
  h5: { fontFamily: 'Montserrat', fontWeight: 600 },
  h6: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '0.25px'
  },

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
