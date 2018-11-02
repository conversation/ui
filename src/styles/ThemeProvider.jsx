import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'

import defaultTheme from './defaultTheme'

export default class ThemeProvider extends React.Component {
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
