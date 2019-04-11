import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'

/**
 * This theme contains the styles which represent the future design of our
 * applications.
 */

const theme = createMuiTheme({
  palette: {
    // mui colours
    primary: { main: '#5499db' },
    secondary: { main: '#f1f1f2' },
    error: { main: '#990000', border: '#d8352a' },

    // expanded colours
    core: { main: '#D8352A' }
  },
  typography: {
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
})

export default memoize(() => theme)
