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
    fontWeight: 700,
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

// Our themes will consider that modals will always appear on top of tooltips.
// We're bringing all z-index variable as the documentation discourages customizing
// individual values.
//
// Documentation: https://v4-5-2.material-ui.com/customization/z-index/#z-index
export const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  tooltip: 1300,
  modal: 1400,
  snackbar: 1500
}
