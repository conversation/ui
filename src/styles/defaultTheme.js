import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

let theme

// Returns the default TC theme.
export default function defaultTheme () {
  if (theme) {
    return theme
  }

  theme = createMuiTheme({
    typography: {
      // Enable v2 variants.
      // https://material-ui.com/style/typography/#migration-to-typography-v2
      useNextVariants: true
    }
  })

  return theme
}
