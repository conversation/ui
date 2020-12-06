import React, { useState } from 'react'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import { Dropdown, MenuItem } from '../../index'

const md = `
# Variants

The \`<Dropdown>\` component allows users to select from a list of items,
rendering MUI's native \`Select\` by default. Keep in mind that non-native
\`Select\` components only allow \`MenuItem\` components as children, where
the native implementation will receive HTML \`option\` tags as children.

## Example

<!-- STORY -->
`

function VariantsExample () {
  const [value, setValue] = useState('1')

  return (
    <GridLayout>
      <Dropdown
        label='Native'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Dropdown>

      <Dropdown
        label='MUI'
        native={false}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        <MenuItem value='1'>One</MenuItem>
        <MenuItem value='2'>Two</MenuItem>
        <MenuItem value='3'>Three</MenuItem>
      </Dropdown>
    </GridLayout>
  )
}

export default withDocs(md, () => <VariantsExample />)
