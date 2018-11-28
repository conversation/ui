import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card, CardAction, CardActions, CardContent, Grid, Typography, withStyles } from '../index'

const spacing = 16

const GridDecorator = story => (
  <Grid container justify='center' spacing={spacing}>
    {story()}
  </Grid>
)

const styles = theme => ({
  root: {
    minWidth: 200
  }
})

const CardExample = withStyles(styles)((props) => (
  <Card {...props}>
    <CardContent>
      <Typography>lorem ipsum</Typography>
    </CardContent>
    <CardActions>
      <CardAction variant='primary'>More</CardAction>
    </CardActions>
  </Card>
))

storiesOf('Cards', module)
  .addDecorator(GridDecorator)
  .add('default', () => (
    <Grid item>
      <CardExample />
    </Grid>
  ))
  .add('raised', () => (
    <Grid item>
      <CardExample raised />
    </Grid>
  ))
