import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import merge from 'deepmerge'
import { typography, errorStateColours } from './common'

import neutral from '../palettes/neutral'

/**
 * This theme contains the styles which represent the future design of our
 * applications.
 */

const theme = createMuiTheme(
  merge(
    {
      palette: {
      // mui colours
        primary: { main: neutral[600] },
        secondary: { main: neutral[50] }
      },
      typography
    }, errorStateColours)
)

export default memoize(() => theme)
