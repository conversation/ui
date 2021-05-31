import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import { deepmerge } from '@material-ui/utils'

import neutral from '../palettes/neutral'
import { typography, errorStateColours } from './common'

/**
 * This theme contains the styles which represent the future design of our
 * applications.
 */

const theme = createMuiTheme(
  deepmerge(
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
