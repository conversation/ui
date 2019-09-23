import core from '../palettes/core'

export const typography = {
  fontFamily: 'Noto Sans',

  h1: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 28,
  },

  h2: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 26,
  },

  h3: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 22,
  },

  h4: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 20,
  },

  h5: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 18,
  },

  h6: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '0.25px',
    fontSize: 16,
  },

  body1: {
    fontFamily: 'Libre Baskerville',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontSize: 16
  },

  body2: {
    fontFamily: 'Noto Sans',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontSize: 18
  },

  button: {
    letterSpacing: 0.25,
    textTransform: 'none',
    fontSize: 14
  },

  overline: {
    letterSpacing: 0.25,
    textTransform: 'none',
    fontSize: 14
  },

  caption: {
    fontSize: 12
  },

  subtitle1: {
    fontSize: 16
  },

  subtitle2: {
    fontSize: 12
  }
}

export const errorStateColours = {
  palette: {
    error: { main: core[700], border: core[600] }
  }
}
