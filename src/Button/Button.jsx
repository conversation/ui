import MaterialButton from '@material-ui/core/Button'
import React from 'react'

/**
 * The Button component basically re-exports the MaterialButton component, with
 * a few tweaks.
 */
const Button = ({ children, colour, ...other }) => (
  <MaterialButton color={colour} {...other}>
    {children}
  </MaterialButton>
)

export default Button
