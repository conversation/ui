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

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.up("sm")]: {
    fontSize: "4.57rem",
  },
}

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.85rem",
  },
}

export default memoize(() => theme)
