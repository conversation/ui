import JssProvider from 'react-jss/lib/JssProvider'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

import defaultTheme from './themes/default'

const theme = defaultTheme()

const ThemeProvider = ({ children, generateClassName, ...other }) => (
  <JssProvider generateClassName={generateClassName} >
    <MuiThemeProvider theme={theme} {...other} >
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
   * Allows sharing of class name generator so that generated class names
   * will remain unique even when rendering multiple react trees.
   */
  generateClassName: PropTypes.any
}

export default ThemeProvider
