import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { TextField } from '../../index'

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
export default withDocs(md, () =>
  <GridLayout>
    <TextField
      error={boolean('Error', false)}
      helperText='Helper text'
      label='Default'
      onChange={action('change')}
      placeholder='Placeholder text'
    />
    <TextField
      error={boolean('Error', false)}
      helperText='Helper text'
      label='Required'
      onChange={action('change')}
      placeholder='Placeholder text'
      required
    />
    <TextField
      disabled
      error={boolean('Error', false)}
      helperText='Helper text'
      label='Disabled'
      onChange={action('change')}
      placeholder='Placeholder text'
    />
    <TextField
      error
      helperText='Helper text'
      label='Error'
      onChange={action('change')}
      placeholder='Placeholder text'
    />
    <TextField
      error={boolean('Error', false)}
      inputProps={{ style: { background: 'lightyellow' } }}
      helperText='Helper text'
      label='Custom'
      onChange={action('change')}
      placeholder='Placeholder text'
    />
    <TextField
      error={boolean('Error', false)}
      helperText='Helper text'
      label='Maximum length validation'
      onChange={action('change')}
      placeholder='Placeholder text'
      maxLength={10}
      maxLengthCountText='characters'
    />
  </GridLayout>
)
