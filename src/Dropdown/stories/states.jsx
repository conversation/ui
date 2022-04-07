import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { Dropdown } from '../../index'

const md = `
# States

The \`<Dropdown>\` component has multiple states:

* \`required\`: A dropdown which is required to be filled by the user.
* \`disabled\`: A dropdown which is disabled.
* \`error\`: A dropdown which is in an error state.

You can set the state of a dropdown using one (or more) boolean flags:

~~~js
<Dropdown required />
<Dropdown disabled />
<Dropdown error />
~~~

## Example

<!-- STORY -->
`

class ExampleDropdown extends React.Component {
  state = {
    value: '1'
  }

  handleChange = event => {
    action('change')(event)
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <Dropdown
        {...this.props}
        onChange={this.handleChange}
        value={this.state.value}
      >
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Dropdown>
    )
  }
}

export default withDocs(md, () =>
  <GridLayout>
    <ExampleDropdown
      helperText='Helper text'
      id='dropdown-1'
      label='Default'
      onChange={action('change')}
    />
    <ExampleDropdown
      required
      helperText='Helper text'
      id='dropdown-2'
      label='Required'
      onChange={action('change')}
    />
    <ExampleDropdown
      disabled
      helperText='Helper text'
      id='dropdown-3'
      label='Disabled'
      onChange={action('change')}
    />
    <ExampleDropdown
      error
      helperText='Helper text'
      label='Error'
      onChange={action('change')}
    />
  </GridLayout>
)
