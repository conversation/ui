import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { Dropdown, MenuItem } from '../../index'

const md = `
# States

The \`<Dropdown>\` component accepts multiple events:

* \`onChange\`: When the field's value changes
* \`onBlur\`: When the field loses focus
* \`onFocus\`: When the field gains focus

~~~js
<Dropdown onChange={alert('change')} />
<Dropdown onBlur={alert('blur')} />
<Dropdown onFocus={alert('focus')} />
~~~

## Example

<!-- STORY -->
`

class ExampleDropdown extends React.Component {
  state = {
    value: '1'
  }

  render () {
    return (
      <Dropdown
        value={this.state.value}
        {...this.props}
      >
        <MenuItem value='1'>One</MenuItem>
        <MenuItem value='2'>Two</MenuItem>
        <MenuItem value='3'>Three</MenuItem>
      </Dropdown>
    )
  }
}

export default withDocs(md, () =>
  <GridLayout>
    <ExampleDropdown
      helperText='Event triggers'
      onChange={action('change')}
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  </GridLayout>
)
