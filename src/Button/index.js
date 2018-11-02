import React from 'react'

import MaterialButton from '@material-ui/core/Button'

const Button = ({ children, colour, ...props }) => (
  <MaterialButton color={colour} {...props}>{children}</MaterialButton>
)

export default Button
