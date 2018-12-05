import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Button } from '../../index'
import { item, grid } from '../../util'

const md = `
# Variants

The \`<Button>\` component has three different variants: \`text\`,
\`outlined\`, and \`contained\`.

You can set the variant of a button using the \`variant\` prop:

~~~js
<Button variant="contained">
  Click Me!
</Button>
~~~

## Example

<!-- STORY -->
`

const VARIANTS = ['text', 'outlined', 'contained']

export default withDocs(md, grid(
  VARIANTS.map((variant, index) => item(() =>
    <Button key={index} variant={variant} onClick={action(variant)}>
      {variant}
    </Button>
  ))
))
