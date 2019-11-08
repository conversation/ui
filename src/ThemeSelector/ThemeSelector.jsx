import ThemeProvider from '../styles/ThemeProvider'
import PropTypes from 'prop-types'
import React from 'react'

import accentTheme from '../styles/themes/accent'
import coreTheme from '../styles/themes/core'
import defaultTheme from '../styles/themes/default'

function stringToTheme (theme) {
  switch (theme) {
    case 'core':
      return coreTheme()
    case 'accent':
      return accentTheme()
    case 'default':
      return defaultTheme()
    default:
      return defaultTheme()
  }
}

/**
 * The `<ThemeSelector>` is a bridge between a string (the name of a theme),
 * and the theme object itself.
 *
 * It's job is to know about the themes, alleviating consuming apps, (like TC),
 * from having to know about the themes themselves.
 *
 * Especially useful in the case of Promos, where we're storing the theme
 * as a string.
 *
 * Used in place of a ThemeProvider, it wraps a ThemeProvider under the hood.
 *
 * ~~~js
 * <ThemeSelector theme="core">
 *  <Button /> // for a red button
 * </ThemeSelector>
 * ~~~
 *
 * ~~~js
 * <ThemeSelector theme="accent">
 *   <Button /> // for a blue button
 * </ThemeSelector>
 * ~~~
 *
 * ~~~js
 * <ThemeSelector theme="default">
 *   <Button /> // for a grey button
 * </ThemeSelector>
 * ~~~
 *
 * It'll also work moving forward with SSR, allowing us to pass down
 * the other ThemeProvider props: `sheetsRegistry`` & `generateClassName``
 */
export default function ThemeSelector ({ children, theme, ...other }) {
  const selectedTheme = stringToTheme(theme)

  return (
    <ThemeProvider theme={selectedTheme} {...other} >
      {children}
    </ThemeProvider>
  )
}

ThemeSelector.defaultProps = {
  children: {},
  theme: 'default'
}

ThemeSelector.propTypes = {
  /**
   * The child components to which the theme will be applied.
   */
  children: PropTypes.node.isRequired,
  /**
   * The allowed theme choices.
   */
  theme: PropTypes.oneOf(['accent', 'core', 'default'])
}
