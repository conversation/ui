import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import { deepmerge } from '@material-ui/utils'

import accent from '../palettes/accent'
import { typography, errorStateColours } from './common'

/**
 * This theme contains 'accent' coloured swatches
 */
const theme = createMuiTheme(
  deepmerge(
    {
      palette: {
        // mui colours
        primary: { main: accent[700] },
        secondary: { main: accent[600] }
      },
      typography
    }, errorStateColours
  )
)

export default memoize(() => theme)
