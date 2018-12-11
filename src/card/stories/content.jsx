import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Card, CardAction, CardActions, CardContent, CardHeader, CardMedia, Typography, withStyles } from '../../index'
import { GridLayout } from '../../util'

const IMAGE_URL = 'https://images.theconversation.com/files/249397/original/file-20181207-128208-vvsiqo.jpg?w=600'
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const md = `
# Content

The \`<Card>\` component contains sub-components which define the title,
content, and actions.

~~~js
<Card>
  <CardHeader title='Title' subheader='Subheader' />
  <CardMedia image='image.png' />
  <CardContent>
    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
  <CardActions>
    <CardAction variant='primary'>Click Me!</CardAction>
  </CardAction>
</Card>
~~~

## Example

<!-- STORY -->
`

const styles = theme => ({
  root: {
    maxWidth: 300
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
})

const ExampleCard = withStyles(styles)(({ classes }) => (
  <Card className={classes.root}>
    <CardHeader title='Title' subheader='Subheader' />
    <CardMedia className={classes.media} image={IMAGE_URL} />
    <CardContent>
      <Typography variant='body1'>{LIPSUM}</Typography>
    </CardContent>
    <CardActions>
      <CardAction onClick={action('primary')} variant='primary'>Click Me!</CardAction>
    </CardActions>
  </Card>
))

export default withDocs(md, () =>
  <GridLayout>
    <ExampleCard />
  </GridLayout>
)
