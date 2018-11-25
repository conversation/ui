import JssProvider from 'react-jss/lib/JssProvider'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'

import defaultTheme from './defaultTheme'

export default class ThemeProvider extends React.Component {
  constructor (props) {
    super(props)
    this.theme = this.props.theme || defaultTheme()
  }

  render () {
    return (
      <JssProvider registry={this.props.sheetsRegistry}>
        <MuiThemeProvider theme={this.theme} sheetsManager={this.props.sheetsManager}>
          {this.props.children}
        </MuiThemeProvider>
      </JssProvider>
    )
  }
}
