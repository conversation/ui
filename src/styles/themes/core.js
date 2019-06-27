import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import merge from 'deepmerge'
import { typography, errorStateColours } from './common'

/**
 *  This theme contains 'core' coloured swatches
 */

const theme = createMuiTheme(
  merge(
    {
      palette: {
      // mui colours
        primary: { main: '#d8352a' },
        secondary: { main: '#e37169' },
        error: { main: '#990000', border: '#d8352a' }
      },
      typography
    }, errorStateColours)
)

export default memoize(() => theme)
