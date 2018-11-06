import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

let theme

// Returns the default TC theme.
export default function defaultTheme () {
  if (theme) {
    return theme
  }

  theme = createMuiTheme({
    palette: {
      primary: { main: '#29339b', light: '#48509e' },
      secondary: { main: '#006060', light: '#5dd39e' },
      error: { main: '#aa1155' }
    },
    typography: {
      // Enable v2 variants.
      // https://material-ui.com/style/typography/#migration-to-typography-v2
      useNextVariants: true,

      fontFamily: "Montserrat",

      body1: {
        fontFamily: "Libre Baskerville"
      },

      body2: {
        fontFamily: "Libre Baskerville"
      },

      caption: {
        fontFamily: "Noto Sans"
      }
    }
  })

  return theme
}
