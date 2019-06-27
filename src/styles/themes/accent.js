import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import memoize from 'lodash/memoize'
import merge from 'deepmerge'
import { typography, errorStateColours } from './common'

/**
 * This theme contains 'accent' coloured swatches
 */
const theme = createMuiTheme(
  merge(
    {
      palette: {
        // mui colours
        primary: { main: '#29339b' },
        secondary: { main: '#48509e' }
      },
      typography
    }, errorStateColours
  )
)

export default memoize(() => theme)
