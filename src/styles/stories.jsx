import React from 'react'
import { storiesOf } from '@storybook/react'

import { Swatch, Typography } from '../index'
import { GridLayout } from '../util'

const COLOURS = ['primary', 'secondary', 'error']
const VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']

storiesOf('Styles', module)
  .add('Colours', () => (
    <GridLayout>
      {COLOURS.map((colour, index) =>
        <div key={index}>
          <Swatch colour={colour} />
          <Swatch colour={colour} variant='dark' />
          <Swatch colour={colour} variant='light' />
        </div>
      )}
    </GridLayout>
  ))
  .add('Typography', () => (
    VARIANTS.map((variant, index) =>
      <Typography gutterBottom key={index} variant={variant}>{variant}. Lorem ipsum</Typography>
    )
  ))
