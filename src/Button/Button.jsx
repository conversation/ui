import MaterialButton from '@material-ui/core/Button'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Overrides the Material Button component with some custom styles.
 */
const Button = ({ children, colour, ...other }) => (
  <MaterialButton color={colour} {...other}>
    {children}
  </MaterialButton>
)

Button.propTypes = {
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  colour: PropTypes.oneOf(["default", "primary", "secondary"]),
  onClick: PropTypes.func,
}

export default Button
