import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Button, Grid } from '../index';

const colours = ['default', 'primary', 'secondary']
const sizes = ['small', 'medium', 'large']

const GridDecorator = story => (
  <Grid container justify="center" spacing={16}>
    {story()}
  </Grid>
)

storiesOf('Buttons', module)
  .addDecorator(GridDecorator)
  .add('text', () => (
    colours.map((colour, index) =>
      <Grid item>
        <Button key={index} variant="text" colour={colour} onClick={action(colour)}>{colour}</Button>
      </Grid>
    )
  ))
  .add('contained', () => (
    colours.map((colour, index) =>
      <Grid item>
        <Button key={index} variant="contained" colour={colour} onClick={action(colour)}>{colour}</Button>
      </Grid>
    )
  ))
  .add('outlined', () => (
    colours.map((colour, index) =>
      <Grid item>
        <Button key={index} variant="outlined" colour={colour} onClick={action(colour)}>{colour}</Button>
      </Grid>
    )
  ))
  .add('sizes', () => (
    sizes.map((size, index) =>
      <Grid item>
        <Button key={index} variant="contained" size={size} onClick={action(size)}>{size}</Button>
      </Grid>
    )
  ))
