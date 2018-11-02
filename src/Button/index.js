import MaterialButton from '@material-ui/core/Button'
import React from 'react'

const Button = ({ children, colour, ...props }) => (
  <MaterialButton color={colour} {...props}>{children}</MaterialButton>
)

export default Button
