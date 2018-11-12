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

storiesOf('Text Fields', module)
  .addDecorator(GridDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Grid item>
        <TextField helperText="Helper text" id="foo" label="Normal" onChange={action('change')} placeholder="Placeholder text" />
      </Grid>
      <Grid item>
        <TextField error helperText="Helper text" id="bar" label="Error" onChange={action('change')} />
      </Grid>
      <Grid item>
        <TextField disabled helperText="Helper text" id="baz" label="Disabled" onChange={action('change')} />
      </Grid>
    </React.Fragment>
  ))
