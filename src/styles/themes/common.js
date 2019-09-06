import core from '../palettes/core'

// Assumes default baseline fontSize of 14px
export const typography = {
  fontFamily: 'Noto Sans',

  h1: { fontSize: '2rem', fontFamily: 'Montserrat', fontWeight: 700 },
  h2: { fontSize: '1.85rem', fontFamily: 'Montserrat', fontWeight: 700 },
  h3: { fontSize: '1.57rem', fontFamily: 'Montserrat', fontWeight: 700 },
  h4: { fontSize: '1.42rem', fontFamily: 'Montserrat', fontWeight: 600 },
  h5: { fontSize: '1.28rem', fontFamily: 'Montserrat', fontWeight: 600 },
  h6: {
    fontSize: '1.14rem',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '0.25px'
  },

  body1: {
    fontFamily: 'Libre Baskerville',
    fontSize: '1rem',
    lineHeight: '1.5'
  },

  body2: {
    fontFamily: 'Noto Sans',
    fontSize: '0.875rem',
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


// h1 - 28px (64px on 'lg' screen)
// h2 - 26px (40px on 'lg' screen)
// h3 - 22px
// h4 - 20px
// h5 - 18px
// h6 - 16px
// Overline - 14px (16px on 'lg' screen)
// Subtitle 1 - 16px
// Subtitle 2 - 12px
// Caption - 12px
// Button - 14px (16px on 'lg' screen)
// Body 1 - 16px (18px on 'lg' screen)
// Body 2 - 18px (24px on 'lg' screen)
