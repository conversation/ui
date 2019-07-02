import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import merge from 'deepmerge'
import { typography, errorStateColours } from './common'
import core from '../palettes/core'
/**
 *  This theme contains 'core' coloured swatches
 */

const theme = createMuiTheme(
  merge(
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
