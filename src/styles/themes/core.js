import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import { deepmerge } from '@material-ui/utils'

import core from '../palettes/core'
import { typography, errorStateColours } from './common'

/**
 *  This theme contains 'core' coloured swatches
 */

const theme = createMuiTheme(
  deepmerge(
    {
      palette: {
      // mui colours
        primary: { main: core[600] },
        secondary: { main: core[400] }
      },
      typography
    }, errorStateColours)
)

export default memoize(() => theme)
