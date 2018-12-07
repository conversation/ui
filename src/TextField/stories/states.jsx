import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { TextField } from '../../index'
import { item, grid } from '../../util'

const md = `
# States

The \`<TextField>\` component has multiple states:

* \`required\`: A text field which is required to be filled by the user.
* \`disabled\`: A text field which is disabled.
* \`error\`: A text field which is in an error state.

You can set the state of a text field using one (or more) boolean flags:

~~~js
<TextField required />
<TextField disabled />
<TextField error />
~~~

## Example

<!-- STORY -->
`

const textFields = [
  <TextField
    helperText='Helper text'
    label='Default'
    onChange={action('change')}
    placeholder='Placeholder text'
  />,
  <TextField required
    helperText='Helper text'
    label='Required'
    onChange={action('change')}
    placeholder='Placeholder text'
  />,
  <TextField disabled
    helperText='Helper text'
    label='Disabled'
    onChange={action('change')}
    placeholder='Placeholder text'
  />,
  <TextField error
    helperText='Helper text'
    label='Error'
    onChange={action('change')}
    placeholder='Placeholder text'
  />
]

export default withDocs(md, grid(
  textFields.map(textField => item(() => textField))
))
