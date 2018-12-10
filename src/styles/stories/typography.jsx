import React from 'react'

import { Typography } from '../../index'

const VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']

export default () => VARIANTS.map((variant, index) =>
  <Typography gutterBottom key={index} variant={variant}>{variant}. Lorem ipsum</Typography>
)
