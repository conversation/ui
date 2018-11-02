import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid, Paper, Typography, withStyles } from '../index'

const colors = ['primary', 'secondary', 'error']

const styles = {
  root: {
    width: 120,
    paddingTop: 50,
    paddingBottom: 50
  }
}

const Swatch = ({ classes, color, theme }) => {
  const variant = theme.palette[color]

  return (
    <Paper className={classes.root} style={{ backgroundColor: variant.main }}>
      <Typography align="center" style={{ color: variant.contrastText }} variant="button">
        {color}
      </Typography>
    </Paper>
  )
}

const ExampleSwatch = withStyles(styles, { withTheme: true })(Swatch)

const GridDecorator = story => (
  <Grid container justify="center" spacing={16}>
    {story()}
  </Grid>
)

storiesOf('Colors', module)
  .addDecorator(GridDecorator)
  .add('palette', () => (
    colors.map((color, index) =>
      <Grid item>
        <ExampleSwatch key={index} color={color} />
      </Grid>
    )
  ))
