import JssProvider from 'react-jss/lib/JssProvider'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
import React from 'react'

import defaultTheme from './themes/default'

const theme = defaultTheme()

const ThemeProvider = ({ children, sheetsManager, sheetsRegistry, generateClassName, ...other }) => (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName} >
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
   * Allows sharing of class name generator so that generated class names
   * will remain unique even when rendering multiple react trees.
   */
  generateClassName: PropTypes.any
}

export default ThemeProvider
