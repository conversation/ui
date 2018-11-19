import MaterialButton from '@material-ui/core/Button'
import React from 'react'

/**
 * Overrides the Material Button component with some custom styles.
 */
const Button = ({ children, colour, ...other }) => (
  <MaterialButton color={colour} {...other}>
    {children}
  </MaterialButton>
)

export default Button
