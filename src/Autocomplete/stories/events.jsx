import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { Autocomplete } from '../../index'
import countries from './countries'

const md = `
# Events

The \`<Autocomplete>\` component accepts multiple events:

* \`onChange\`: When the field's value changes
* \`onBlur\`: When the field loses focus
* \`onFocus\`: When the field gains focus

~~~js
<Autocomplete onChange={alert('change')} />
<Autocomplete onBlur={alert('blur')} />
<Autocomplete onFocus={alert('focus')} />
~~~

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  <GridLayout>
    <Autocomplete
      label='Triggers events'
      onChange={action('change')}
      onBlur={action('blur')}
      onFocus={action('focus')}
      suggestions={countries}
    />
  </GridLayout>
)
