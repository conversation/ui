import { createMuiTheme } from '@material-ui/core/styles'

export { MuiThemeProvider as ThemeProvider, withStyles, withTheme } from '@material-ui/core/styles'

// Returns the default TC theme.
export function getDefaultTheme () {
  return createMuiTheme({
    typography: {
      // Enable v2 variants.
      // https://material-ui.com/style/typography/#migration-to-typography-v2
      useNextVariants: true
    }
  })
}
