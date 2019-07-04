import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Button } from '../../index'
import { GridLayout } from '../../util'
import { ThemeProvider } from '../../styles'
import accentTheme from '../../styles/themes/accent'
import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

const VARIANTS = ['text', 'outlined', 'contained']
const COLOURS = ['primary', 'secondary']

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

export default withDocs(md, () =>
  <React.Fragment>
    {VARIANTS.map(variant =>
      <GridLayout>
        {COLOURS.map(colour =>
          <Button key={variant + colour} color={colour} variant={variant} onClick={action(variant)}>
            {variant}
          </Button>
        )}
      </GridLayout>
    )}

    <ThemeProvider theme={defaultTheme()}>
      {VARIANTS.map(variant =>
        <GridLayout>
          {COLOURS.map(colour =>
            <Button key={variant + colour} color={colour} variant={variant} onClick={action(variant)}>
              {variant}
            </Button>
          )}
        </GridLayout>
      )}
    </ThemeProvider>

    <ThemeProvider theme={coreTheme()}>
      {VARIANTS.map(variant =>
        <GridLayout>
          {COLOURS.map(colour =>
            <Button key={variant + colour} color={colour} variant={variant} onClick={action(variant)}>
              {variant}
            </Button>
          )}
        </GridLayout>
      )}
    </ThemeProvider>

    <ThemeProvider theme={accentTheme()}>
      {VARIANTS.map(variant =>
        <GridLayout>
          {COLOURS.map(colour =>
            <Button key={variant + colour} color={colour} variant={variant} onClick={action(variant)}>
              {variant}
            </Button>
          )}
        </GridLayout>
      )}
    </ThemeProvider>
  </React.Fragment>
)
