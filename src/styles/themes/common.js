import core from '../palettes/core'
import { createMuiTheme } from '@material-ui/core/styles'

// Create a new theme to use it's default breakpoints
const theme = createMuiTheme()

export const typography = {
  fontFamily: 'Noto Sans',
  fontSize: 16,

  button: {
    textTransform: 'none',
    fontSize: '0.875rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem'
    }
  }
}

export const errorStateColours = {
  palette: {
    error: { main: core[700], border: core[600] }
  }
}
