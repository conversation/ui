import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Button } from '../../index'
import { item, grid } from '../../util'

const md = `
# Sizes

The \`<Button>\` component has three different sizes: \`small\`, \`medium\`,
and \`large\`.

You can set the size of a button using the \`size\` prop:

~~~js
<Button size="large">
  Click Me!
</Button>
~~~

## Example

<!-- STORY -->
`

const SIZES = ['small', 'medium', 'large']

export default withDocs(md, grid(
  SIZES.map((size, index) => item(() =>
    <Button key={index} variant='contained' size={size} onClick={action(size)}>
      {size}
    </Button>
  ))
))
