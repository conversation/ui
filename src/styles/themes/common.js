import core from '../palettes/core'
import { createMuiTheme } from '@material-ui/core/styles';

// Create a new theme to use it's default breakpoints
const theme = createMuiTheme();

export const typography = {
  fontFamily: 'Noto Sans',
  fontSize: 16,

  h1: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: "1.75rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "2.75rem"
    }
  },

  h2: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: "1.625rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "2rem"
    }
  },

  h3: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: "1.375rem",
  },

  h4: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: "1.25rem",
  },

  h5: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: "1.125rem",
  },

  h6: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '0.25px',
    fontSize: "1rem",
  },

  body1: {
    fontFamily: 'Libre Baskerville',
    lineHeight: '1.5',
    fontSize: "1rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.125rem"
    }
  },

  body2: {
    fontFamily: 'Noto Sans',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontSize: "1.125rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.5rem"
    }
  },

  button: {
    letterSpacing: 0.25,
    textTransform: 'none',
    fontSize: "0.875rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1rem"
    }
  },

  overline: {
    letterSpacing: 0.25,
    textTransform: 'none',
    fontSize: "0.875rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1rem"
    }
  },

  caption: {
    fontSize: "0.75rem"
  },

  subtitle1: {
    fontSize: "1rem",
  },

  subtitle2: {
    fontSize: "0.75rem"
  }
}

export const errorStateColours = {
  palette: {
    error: { main: core[700], border: core[600] }
  }
}
