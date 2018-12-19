import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash-es/memoize'
import { darken, lighten } from '@material-ui/core/styles/colorManipulator'

/**
 * This theme contains the styles which represent the legacy design of our
 * applications. Components configured with this theme should visually gel with
 * our legacy stylesheets.
 */
export default memoize(() => createMuiTheme({
  palette: {
    primary: { main: '#5499db' },
    secondary: { main: '#50ab50', contrastText: '#fff' },
    error: { main: '#d8352a' },
    success: { main: '#50ab50', dark: darken('#50ab50', 0.2 * 1.5), light: lighten('#50ab50', 0.2), contrastText: '#fff' }
  },
  typography: {
    // Enable v2 variants.
    // https://material-ui.com/style/typography/#migration-to-typography-v2
    useNextVariants: true,

    fontFamily: 'Montserrat',

    body1: {
      fontSize: '1rem',
      lineHeight: '1.5'
    },

    body2: {
      fontFamily: 'Libre Baskerville',
      fontSize: '1rem',
      lineHeight: '1.5'
    },

    button: {
      fontFamily: 'Noto Sans',
      textTransform: 'none'
    },

    caption: {
      fontFamily: 'Noto Sans'
    }
  }
}))
