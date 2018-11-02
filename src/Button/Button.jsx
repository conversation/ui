import MaterialButton from '@material-ui/core/Button'
import React from 'react'

const Button = ({ children, colour, ...other }) => (
  <MaterialButton color={colour} {...other}>
    {children}
  </MaterialButton>
)

export default Button
