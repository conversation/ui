import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'

/**
 * This theme contains the styles which represent the future design of our
 * applications.
 */
export default memoize(() => createMuiTheme({
  palette: {
    neutral: { 900: '#000000', 800: '#202020', 700: '#383838', 600: '#555768', 400: '#AFB2BA', 200: '#D6D6DA', 50: '#f1f1f2', 40: '#f8f8f8', 0: '#ffffff' },
    core: { 700: '#990000', 600: '#D8352A', 400: '#E37169', 200: '#ECC3C0' },
    accent: { 700: '#29339B', 600: '#48509E', 200: '#B1B4DA' },
    positive: { 700: '#047C56', 600: '#02A371', 400: '#19C992', 200: '#8CE4C8' },
    aware: { 600: '#F5A623', 200: '#F6E7AD' }
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
