import React from 'react'
import { withDocs } from 'storybook-readme'

import { Typography } from '../../index'

const VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline', 'inherit']
const LIPSUM = 'Lorem ipsum\ndolor'

const md = `
# Variants

The \`<Typography>\` component has multiple variants: ${VARIANTS.map(a => `\`${a}\``).join(', ')}.

You can set the variant of the text using the \`variant\` prop:

~~~js
<Typography variant='h1'>
  lorem ipsum
</Typography>
~~~

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  VARIANTS.map((variant, index) =>
    <Typography
      gutterBottom
      display='block'
      key={index}
      variant={variant}
    >
      {variant}.{LIPSUM}
    </Typography>
  )
)
