import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Button } from '../../index'
import { GridLayout } from '../../util'

const md = `
# Variants

The \`<Button>\` component has three different variants: \`text\`,
\`outlined\`, and \`contained\`.

You can set the variant of a button using the \`variant\` prop:

~~~js
<Button variant='contained'>
  Click Me!
</Button>
~~~

## Example

<!-- STORY -->
`

const VARIANTS = ['text', 'outlined', 'contained']

export default withDocs(md, () =>
  <GridLayout>
    {VARIANTS.map(variant =>
      <Button key={variant} variant={variant} onClick={action(variant)}>
        {variant}
      </Button>
    )}
  </GridLayout>
)
