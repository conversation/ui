import React from 'react'

import { Button as BootstrapButton } from 'reactstrap'

const SIZES_MAP = {
  "small": "sm",
  "large": "lg"
}

export const Button = ({ colour, children, onClick, outline, size }) => {
  return (
    <BootstrapButton
      color={colour}
      onClick={onClick}
      outline={outline}
      size={SIZES_MAP[size]}
    >{children}</BootstrapButton>
  )
}
