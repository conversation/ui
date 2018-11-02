import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Button, Grid } from '../index';

const colors = ['default', 'primary', 'secondary']
const sizes = ['small', 'medium', 'large']

const GridDecorator = story => (
  <Grid container justify="center" spacing={16}>
    {story()}
  </Grid>
)

storiesOf('Buttons', module)
  .addDecorator(GridDecorator)
  .add('text', () => (
    colors.map((color, index) =>
      <Grid item>
        <Button key={index} variant="text" color={color} onClick={action(color)}>{color}</Button>
      </Grid>
    )
  ))
  .add('contained', () => (
    colors.map((color, index) =>
      <Grid item>
        <Button key={index} variant="contained" color={color} onClick={action(color)}>{color}</Button>
      </Grid>
    )
  ))
  .add('outlined', () => (
    colors.map((color, index) =>
      <Grid item>
        <Button key={index} variant="outlined" color={color} onClick={action(color)}>{color}</Button>
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
