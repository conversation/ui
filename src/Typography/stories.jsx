import React from 'react'
import { storiesOf } from '@storybook/react'

import { Typography } from '../index'

const variants = ['h1', 'h2', 'h3', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']

const GridDecorator = story => (
  <div>
    {story()}
  </div>
)

storiesOf('Typography', module)
  .addDecorator(GridDecorator)
  .add('variants', () => (
    variants.map((variant, index) =>
      <Typography gutterBottom key={index} variant={variant}>{variant}. Lorem ipsum</Typography>
    )
  ))
