import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export { withStyles, withTheme } from '@material-ui/core/styles'

// Returns the default TC theme.
function defaultTheme () {
  return createMuiTheme({
    typography: {
      // Enable v2 variants.
      // https://material-ui.com/style/typography/#migration-to-typography-v2
      useNextVariants: true
    }
  })
}

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.theme = this.props.theme || defaultTheme()
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}
