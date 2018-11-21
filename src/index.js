// Re-exported Material UI (MUI) components.
//
// Ideally, we shouldn't expose too much of the raw MUI API because it means
// that our apps will be tightly coupled to an API we don't control. It's
// better to wrap MUI components in our own wrapper, even if it doesn't add any
// functionality.
//
// While we are actively developing this library, it does makes sense to give
// ourselves a head start with a few MUI components.
export { default as Dialog } from '@material-ui/core/Dialog'
export { default as Grid } from '@material-ui/core/Grid'
export { default as Paper } from '@material-ui/core/Paper'
export { default as Typography } from '@material-ui/core/Typography'

// Our API.
export { ThemeProvider, defaultTheme, withStyles, withTheme } from './styles'
export { default as Button } from './Button'
export { default as DialogActions } from './dialog/DialogActions'
export { default as DialogContent } from './dialog/DialogContent'
export { default as DialogTitle } from './dialog/DialogTitle'
export { default as Swatch } from './colours/Swatch'
export { default as TextField } from './TextField'
