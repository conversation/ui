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

    // expanded colours
    core: { main: '#D8352A' }
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
})

export default memoize(() => theme)
