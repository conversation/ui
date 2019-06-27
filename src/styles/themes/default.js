import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import merge from 'deepmerge'
import { typography, errorStateColours } from './common'

/**
 * This theme contains the styles which represent the future design of our
 * applications.
 */

const theme = createMuiTheme(
  merge(
    {
      palette: {
      // mui colours
        primary: { main: '#555768' },
        secondary: { main: '#f1f1f2' }
      },
      typography
    }, errorStateColours)
)

export default memoize(() => theme)
