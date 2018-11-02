import Grid from '@material-ui/core/Grid';
import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Button from './index'

const COLORS = ['default', 'primary', 'secondary']
const SIZES = ['small', 'medium', 'large']

const GridDecorator = story => (
  <Grid container justify="center" spacing={16}>
    {story()}
  </Grid>
)

storiesOf('Buttons', module)
  .addDecorator(GridDecorator)
  .add('text', () => (
    COLORS.map((color, index) =>
      <Grid item>
        <Button key={index} variant="text" color={color} onClick={action(color)}>{color}</Button>
      </Grid>
    )
  ))
  .add('contained', () => (
    COLORS.map((color, index) =>
      <Grid item>
        <Button key={index} variant="contained" color={color} onClick={action(color)}>{color}</Button>
      </Grid>
    )
  ))
  .add('outlined', () => (
    COLORS.map((color, index) =>
      <Grid item>
        <Button key={index} variant="outlined" color={color} onClick={action(color)}>{color}</Button>
      </Grid>
    )
  ))
  .add('sizes', () => (
    SIZES.map((size, index) =>
      <Grid item>
        <Button key={index} variant="contained" size={size} onClick={action(size)}>{size}</Button>
      </Grid>
    )
  ))
