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
  .add('normal', () => (
    <React.Fragment>
      <Grid item>
        <TextField id="foo" label="Normal" onChange={action('change')} placeholder="placeholder" />
      </Grid>
      <Grid item>
        <TextField error id="bar" label="Error" onChange={action('change')} placeholder="placeholder" />
      </Grid>
      <Grid item>
        <TextField disabled id="baz" label="Disabled" onChange={action('change')} placeholder="placeholder" />
      </Grid>
    </React.Fragment>
  ))
