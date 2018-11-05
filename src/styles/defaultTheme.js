import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

let theme

// Returns the default TC theme.
export default function defaultTheme () {
  if (theme) {
    return theme
  }

  theme = createMuiTheme({
    palette: {
      primary: { main: '#29339b' },
      secondary: { main: '#006060' },
      error: { main: '#aa1155' }
    },
    typography: {
      // Enable v2 variants.
      // https://material-ui.com/style/typography/#migration-to-typography-v2
      useNextVariants: true
    }
  })

  return theme
}
