import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { TextField, Grid } from '../index'

const spacing = 16

const GridDecorator = story => (
  <Grid container justify='flex-start' spacing={spacing}>
    {story()}
  </Grid>
)

storiesOf('Text Fields', module)
  .addDecorator(GridDecorator)
  .add('text', () => (
    <React.Fragment>
      <Grid item>
        <TextField
          helperText='Helper text'
          id='default'
          label='Default'
          onChange={action('change')}
          placeholder='Placeholder text'
        />
      </Grid>
      <Grid item>
        <TextField
          helperText='Helper text'
          id='required'
          label='Required'
          onChange={action('change')}
          placeholder='Placeholder text'
          required
        />
      </Grid>
      <Grid item>
        <TextField
          error
          helperText='Helper text'
          id='error'
          label='Error'
          onChange={action('change')}
          placeholder='Placeholder text'
        />
      </Grid>
      <Grid item>
        <TextField
          disabled
          helperText='Helper text'
          id='disabled'
          label='Disabled'
          onChange={action('change')}
          placeholder='Placeholder text'
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText='Helper text'
          id='default'
          label='Full width'
          onChange={action('change')}
          placeholder='Placeholder text'
          fullWidth
        />
      </Grid>
    </React.Fragment>
  ))
  .add('password', () => (
    <React.Fragment>
      <Grid item>
        <TextField
          helperText='Enter your secret password'
          id='password'
          label='Password'
          onChange={action('change')}
          type='password'
        />
      </Grid>
    </React.Fragment>
  ))