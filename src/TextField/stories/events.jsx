import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { TextField } from '../../index'

const md = `
# Events

The \`<TextField>\` component accepts multiple events:

* \`onChange\`: When the field's value changes
* \`onBlur\`: When the field loses focus
* \`onFocus\`: When the field gains focus

~~~js
<TextField onChange={alert('change')} />
<TextField onBlur={alert('blur')} />
<TextField onFocus={alert('focus')} />
~~~

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  <GridLayout>
    <TextField
      label='onChange'
      onChange={action('change')}
      placeholder='Trigger on change'
    />
    <TextField
      label='onBlur'
      onBlur={action('blur')}
      placeholder='Trigger on lose focus'
    />
    <TextField
      label='onFocus'
      onFocus={action('focus')}
      placeholder='Trigger on gain focus'
    />
  </GridLayout>
)
