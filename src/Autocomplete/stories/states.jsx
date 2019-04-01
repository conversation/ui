import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { Autocomplete } from '../../index'
import countries from './countries'

const md = `
# States

The \`<Autocomplete>\` component has multiple states:

* \`required\`: An autocomplete which is required to be filled by the user.
* \`disabled\`: An autocomplete which is disabled.
* \`error\`: An autocomplete which is in an error state.

You can set the state of a text field using one (or more) boolean flags:

~~~js
<Autocomplete required />
<Autocomplete disabled />
<Autocomplete error />
~~~

## Example

<!-- STORY -->
`
export default withDocs(md, () =>
  <GridLayout>
    <Autocomplete
      helperText='Helper text'
      label='Default'
      onChange={action('change')}
      placeholder='Placeholder text'
      suggestions={countries}
    />
    <Autocomplete required
      helperText='Helper text'
      label='Required'
      onChange={action('change')}
      placeholder='Placeholder text'
      suggestions={countries}
    />
    <Autocomplete disabled
      helperText='Helper text'
      label='Disabled'
      onChange={action('change')}
      placeholder='Placeholder text'
      suggestions={countries}
    />
    <Autocomplete error
      helperText='Helper text'
      label='Error'
      onChange={action('change')}
      placeholder='Placeholder text'
      suggestions={countries}
    />
  </GridLayout>
)
