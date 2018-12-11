import React from 'react'
import { withDocs } from 'storybook-readme'

import { Typography } from '../../index'

const ALIGNMENTS = ['left', 'center', 'right', 'justify', 'inherit']
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tortor odio.'

const md = `
# Alignments

The \`<Typography>\` component has multiple alignments: ${ALIGNMENTS.map(a => `\`${a}\``).join(', ')}.

You can set the alignment of the text using the \`align\` prop:

~~~js
<Typography align='primary'>
  lorem ipsum
</Typography>
~~~

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  ALIGNMENTS.map((alignment, index) =>
    <Typography align={alignment} key={index} paragraph variant='body1'>{alignment}. {LIPSUM}</Typography>
  )
)
