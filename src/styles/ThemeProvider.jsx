import JssProvider from 'react-jss/lib/JssProvider'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
import React from 'react'

import legacy from './themes/legacy'

const ThemeProvider = ({ children, sheetsManager, sheetsRegistry, theme, ...other }) => (
  <JssProvider registry={sheetsRegistry}>
    <MuiThemeProvider theme={theme} sheetsManager={sheetsManager} {...other} >
      {children}
    </MuiThemeProvider>
  </JssProvider>
)

ThemeProvider.propTypes = {
  /**
   * The child components to which the theme will be applied.
   */
  children: PropTypes.node.isRequired,

  /**
   * A `sheetsManager` is used to handle stylesheet injection in the page.
   */
  sheetsManager: PropTypes.object,

  /**
   * A `sheetsRegistry` is used to keep track of the stylesheet.
   */
  sheetsRegistry: PropTypes.object,

  /**
   * A theme object or function.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
}

ThemeProvider.defaultProps = {
  theme: legacy()
}

export default ThemeProvider
