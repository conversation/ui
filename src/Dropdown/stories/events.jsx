import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { Dropdown } from '../../index'

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
function ExampleDropdown (props) {
  const [value, setValue] = useState('1')

  const { onChange, ...dropdownProps } = props

  const dropdownChange = (event) => {
    onChange()
    setValue(event.target.value)
  }

  return (
    <Dropdown
      value={value}
      onChange={dropdownChange}
      {...dropdownProps}
    >
      <option value='1'>One</option>
      <option value='2'>Two</option>
      <option value='3'>Three</option>
    </Dropdown>
  )
}

export default withDocs(md, () =>
  <GridLayout>
    <ExampleDropdown
      helperText='Event triggers'
      label='Events'
      onChange={action('change')}
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  </GridLayout>
)
