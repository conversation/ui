import React from 'react'
import { withDocs } from 'storybook-readme'

import { Card, CardContent, CardHeader, Typography, withStyles } from '../../index'
import { GridLayout } from '../../util'

const md = `
# Raised

The \`<Card>\` component has a \`raised\` state, where it appears to be raised
above its background.

~~~js
<Card raised>
  <CardContent>
    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
</Card>
~~~

## Example

<!-- STORY -->
`

const styles = theme => ({
  root: {
    maxWidth: 300
  }
})

const ExampleCard = withStyles(styles)(({ classes, title, ...other }) => (
  <Card {...other} className={classes.root}>
    <CardHeader title={title} />
    <CardContent>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
    </CardContent>
  </Card>
))

export default withDocs(md, () =>
  <GridLayout>
    <ExampleCard title='Default' />
    <ExampleCard title='Raised' raised />
  </GridLayout>
)
