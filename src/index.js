// Re-exported Material UI (MUI) components.
//
// Ideally, we shouldn't expose too much of the raw MUI API because it means
// that our apps will be tightly coupled to an API we don't control. It's
// better to wrap MUI components in our own wrapper, even if it doesn't add any
// functionality.
//
// While we are actively developing this library, it does makes sense to give
// ourselves a head start with a few MUI components.
export { default as CardActions } from '@material-ui/core/CardActions'
export { default as CardContent } from '@material-ui/core/CardContent'
export { default as CardHeader } from '@material-ui/core/CardHeader'
export { default as CardMedia } from '@material-ui/core/CardMedia'
export { default as Grid } from '@material-ui/core/Grid'
export { default as MenuItem } from '@material-ui/core/MenuItem'
export { default as Paper } from '@material-ui/core/Paper'
export { default as Toolbar } from '@material-ui/core/Toolbar'
export { default as withStyles } from '@material-ui/core/styles/withStyles'
export { default as withTheme } from '@material-ui/core/styles/withTheme'

// Our API.
export { ThemeProvider, themes } from './styles'
export { default as Button } from './Button'
export { default as Card } from './card/Card'
export { default as CardAction } from './card/CardAction'
export { default as DateTimePicker } from './DateTimePicker'
export { default as Dialog } from './dialog/Dialog'
export { default as DialogAction } from './dialog/DialogAction'
export { default as DialogActions } from './dialog/DialogActions'
export { default as DialogContent } from './dialog/DialogContent'
export { default as DialogTitle } from './dialog/DialogTitle'
export { default as Dropdown } from './Dropdown'
export { default as Swatch } from './colours/Swatch'
export { default as Switch } from './Switch'
export { default as TextField } from './TextField'
export { default as Typography } from './Typography'
