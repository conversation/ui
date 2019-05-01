import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { TextField } from '../../index'

const md = `
# Types

The \`<TextField>\` component has multiple types:

* \`text\`: A regular text field (this is the default type).
* \`password\`: A text field whose value is obscured.

You can set the type of a text field using the \`type\` prop:

~~~js
<TextField type='text' />
<TextField type='password' />
<TextField type='email' />
~~~

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  <GridLayout>
    <TextField
      helperText='Enter your full name'
      label='Name'
      onChange={action('change')}
      placeholder='Jane Doe'
      type='text'
    />
    <TextField
      helperText='Enter your secret password'
      label='Password'
      onChange={action('change')}
      type='password'
    />
    <TextField
      helperText='Enter your email'
      label='Email'
      onChange={action('change')}
      type='email'
    />
  </GridLayout>
)
