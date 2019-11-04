import * as colours from './colours'

// Re-exported Material UI (MUI) components.
//
// Ideally, we shouldn't expose too much of the raw MUI API because it means
// that our apps will be tightly coupled to an API we don't control. It's
// better to wrap MUI components in our own wrapper, even if it doesn't add any
// functionality.
//
// While we are actively developing this library, it does makes sense to give
// ourselves a head start with a few MUI components.
export { default as Box } from '@material-ui/core/Box'
export { default as Checkbox } from '@material-ui/core/Checkbox'
export { default as Drawer } from '@material-ui/core/Drawer'
export { default as FormControl } from '@material-ui/core/FormControl'
export { default as FormControlLabel } from '@material-ui/core/FormControlLabel'
export { default as FormGroup } from '@material-ui/core/FormGroup'
export { default as FormHelperText } from '@material-ui/core/FormHelperText'
export { default as FormLabel } from '@material-ui/core/FormLabel'
export { default as Grid } from '@material-ui/core/Grid'
export { default as MenuItem } from '@material-ui/core/MenuItem'
export { default as Paper } from '@material-ui/core/Paper'
export { default as Radio } from '@material-ui/core/Radio'
export { default as ToggleButton } from '@material-ui/lab/ToggleButton'
export { default as ToggleButtonGroup } from '@material-ui/lab/ToggleButtonGroup'
export { default as Toolbar } from '@material-ui/core/Toolbar'
export { default as withStyles } from '@material-ui/core/styles/withStyles'
export { default as withTheme } from '@material-ui/core/styles/withTheme'

// Our API.
export { ThemeProvider } from './styles'
export { colours }
export { default as ArticleDonationBanner } from './ArticleDonationBanner'
export { default as Autocomplete } from './Autocomplete'
export { default as Avatar } from './Avatar'
export { default as Button } from './Button'
export { default as ChipInput } from './ChipInput'
export { default as DatePicker } from './pickers/DatePicker'
export { default as DateTimePicker } from './pickers/DateTimePicker'
export { default as Dialog } from './dialog/Dialog'
export { default as DialogAction } from './dialog/DialogAction'
export { default as DialogActions } from './dialog/DialogActions'
export { default as DialogAvatar } from './dialog/DialogAvatar'
export { default as DialogContent } from './dialog/DialogContent'
export { default as DialogInlineTitle } from './dialog/DialogInlineTitle'
export { default as DialogTitle } from './dialog/DialogTitle'
export { default as DonationBanner } from './DonationBanner'
export { default as DonationDialog } from './DonationDialog'
export { default as Dropdown } from './Dropdown'
export { default as MessageTile } from './MessageTile'
export { default as MessageTileAttribution } from './MessageTile/MessageTileAttribution'
export { default as MessageTileBody } from './MessageTile/MessageTileBody'
export { default as MessageTileButton } from './MessageTile/MessageTileButton'
export { default as MessageTileHeader } from './MessageTile/MessageTileHeader'
export { default as MiniDivider } from './divider/MiniDivider'
export { default as Person } from './Person'
export { default as Switch } from './Switch'
export { default as TextField } from './TextField'
export { default as ThickBanner } from './ThickBanner'
export { default as ThinBanner } from './ThinBanner'
export { default as ThinDonationBanner } from './ThinDonationBanner'
export { default as TimePicker } from './pickers/TimePicker'
export { default as Typography } from './Typography'
export { default as StickyPopup } from './StickyPopup'

export { default as defaultTheme } from './styles/themes/default'
export { default as accentTheme } from './styles/themes/accent'
export { default as coreTheme } from './styles/themes/core'

export { default as neutralPalette } from './styles/palettes/neutral'
export { default as accentPalette } from './styles/palettes/accent'
export { default as corePalette } from './styles/palettes/core'
