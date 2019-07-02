import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import merge from 'deepmerge'
import accent from '../palettes/accent'
import { typography, errorStateColours } from './common'

/**
 * This theme contains 'accent' coloured swatches
 */
const theme = createMuiTheme(
  merge(
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
