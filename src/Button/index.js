import React from 'react'

import { Button as BootstrapButton } from 'reactstrap'

export const Button = ({ color, children, onClick, outline, size }) => (
  <BootstrapButton color={color} onClick={onClick} outline={outline} size={size}>{children}</BootstrapButton>
)
