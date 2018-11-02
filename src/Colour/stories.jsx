import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'

import { withStyles } from '../styles'

const COLORS = ['primary', 'secondary', 'error']

const styles = theme => ({
  root: {
    width: 120,
    paddingTop: 50,
    paddingBottom: 50
  },
  label: {
    ...theme.typography.button,
    textAlign: 'center'
  }
})

const Swatch = ({ classes, color, theme }) => {
  const variant = theme.palette[color]

  return (
    <Paper classes={{ root: classes.root }} style={{ backgroundColor: variant.main }}>
      <Typography classes={{ root: classes.label }} style={{ color: variant.contrastText }}>
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
    COLORS.map((color, index) =>
      <Grid item>
        <ExampleSwatch key={index} color={color} />
      </Grid>
    )
  ))
