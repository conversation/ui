import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Dropdown, Grid, MenuItem, withStyles } from '../index';

const spacing = 16

const GridDecorator = story => (
  <Grid container justify="flex-start" spacing={spacing}>
    {story()}
  </Grid>
)

class DropdownExample extends React.Component {
  state = {
    value: '1'
  }

  handleChange = event => {
    action('change')(event)
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <Dropdown
        {...this.props}
        onChange={this.handleChange}
        value={this.state.value}
      >
        <MenuItem value="1">One</MenuItem>
        <MenuItem value="2">Two</MenuItem>
        <MenuItem value="3">Three</MenuItem>
      </Dropdown>
    )
  }
}

storiesOf('Dropdowns', module)
  .addDecorator(GridDecorator)
  .add('basic', () => (
    <React.Fragment>
      <Grid item>
        <DropdownExample
          helperText="Helper text"
          id="default"
          label="Default"
        />
      </Grid>
      <Grid item>
        <DropdownExample
          disabled
          helperText="Helper text"
          id="disabled"
          label="Disabled"
        />
      </Grid>
      <Grid item>
        <DropdownExample
          error
          helperText="Helper text"
          id="error"
          label="Error"
        />
      </Grid>
      <Grid item xs={12}>
        <DropdownExample
          fullWidth
          helperText="Helper text"
          id="default"
          label="Full width"
        />
      </Grid>
    </React.Fragment>
  ))
