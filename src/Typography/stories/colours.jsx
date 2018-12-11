import React from 'react'
import { withDocs } from 'storybook-readme'

import { Typography } from '../../index'

const COLOURS = ['default', 'primary', 'secondary', 'error', 'inherit']
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tortor odio.'

const md = `
# Colours

The \`<Typography>\` component has multiple colours: ${COLOURS.map(a => `\`${a}\``).join(', ')}.

You can set the colour of the text using the \`colour\` prop:

~~~js
<Typography colour='primary'>
  lorem ipsum
</Typography>
~~~

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  COLOURS.map((colour, index) =>
    <Typography colour={colour} key={index} paragraph variant='body1'>{colour}. {LIPSUM}</Typography>
  )
)
