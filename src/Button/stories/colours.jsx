import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Button } from '../../index'
import { item, grid } from '../../util'

const md = `
# Colours

The \`<Button>\` component has three different colours: \`default\`,
\`primary\`, and \`secondary\`.

The \`primary\` buttons (e.g. save, yes, etc.) should have a higher visual
empasis, while \`secondary\` buttons (e.g. delete, etc.) are given a different
emphasis to indicate to the user that they perform an auxilary action.

You can set the colour of a button using the \`colour\` prop:

~~~js
<Button colour="primary">
  Click Me!
</Button>
~~~

## Example

<!-- STORY -->
`

const COLOURS = ['default', 'primary', 'secondary']

export default withDocs(md, grid(
  COLOURS.map((colour, index) => item(() =>
    <Button key={index} variant='contained' colour={colour} onClick={action(colour)}>
      {colour}
    </Button>
  ))
))
