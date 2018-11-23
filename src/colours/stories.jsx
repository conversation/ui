import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid, Swatch } from '../index'

const colours = ['primary', 'secondary', 'error']

const GridDecorator = story => (
  <Grid container justify='center' spacing={16}>
    {story()}
  </Grid>
)

storiesOf('Colours', module)
  .addDecorator(GridDecorator)
  .add('palette', () => (
    colours.map((colour, index) =>
      <Grid item key={index}>
        <Swatch colour={colour} />
        <Swatch colour={colour} variant='dark' />
        <Swatch colour={colour} variant='light' />
      </Grid>
    )
  ))
