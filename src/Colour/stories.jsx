import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'

import { withTheme } from '../styles'

const COLORS = ['primary', 'secondary', 'error']

const Swatch = ({ color, theme }) => {
  const variant = theme.palette[color]
  const styles = {
    paper: {
      backgroundColor: variant.main,
      width: 120,
      paddingTop: 50,
      paddingBottom: 50
    },
    typography: {
      color: variant.contrastText
    }
  }

  return (
    <Paper style={styles.paper}>
      <Typography align="center" style={styles.typography} variant="button">
        {color}
      </Typography>
    </Paper>
  )
}

const ExampleSwatch = withTheme()(Swatch)

const GridDecorator = story => (
  <Grid container justify="center" spacing={16}>
    {story()}
  </Grid>
)

storiesOf('Colors', module)
  .addDecorator(GridDecorator)
  .add('palette', () => (
    COLORS.map((color, index) =>
      <Grid item>
        <ExampleSwatch key={index} color={color} />
      </Grid>
    )
  ))
