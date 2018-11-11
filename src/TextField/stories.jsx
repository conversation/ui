import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { TextField, Grid, withStyles } from '../index';

const spacing = 16

const GridDecorator = story => (
  <Grid container justify="center" spacing={spacing}>
    {story()}
  </Grid>
)

storiesOf('Text fields', module)
  .addDecorator(GridDecorator)
  .add('text', () => (
    <Grid item>
      <TextField helperText="hint" onChange={action('change')} placeholder="placeholder" required />
    </Grid>
  ))
