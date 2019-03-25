import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { Dropdown, MenuItem } from '../../index'

const md = `
# Example

The \`<MenuItem>\` component only is to be used only inside a \`<Dropdown>\`.

Consider it a replacement for an \`<option>\`, and the \`<Dropdown>\`
is an analogue for a \`<select>\`.

~~~js
<MenuItem key={} value={}>{text}</MenuItem>
~~~

## Example

<!-- STORY -->
`

class ExampleDropdown extends React.Component {
  state = {
    value: 'AU'
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <Dropdown
        {...this.props}
        onChange={this.handleChange}
        value={this.state.value}
      >
        <MenuItem key='1' value='AU'>Australia</MenuItem>
        <MenuItem key='2' value='UK'>United Kingdom</MenuItem>
        <MenuItem key='3' value='US'>United States</MenuItem>
      </Dropdown>
    )
  }
}

export default withDocs(md, () =>
  <GridLayout>
    <ExampleDropdown
      onChange={action('change')}
    />
  </GridLayout>
)
