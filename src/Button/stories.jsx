import Icon from '@material-ui/icons/FavoriteBorder'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Button, Grid, withStyles } from '../index';

const colours = ['default', 'primary', 'secondary']
const sizes = ['small', 'medium', 'large']
const spacing = 16

const GridDecorator = story => (
  <Grid container justify="center" spacing={spacing}>
    {story()}
  </Grid>
)

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
})

const IconButton = withStyles(styles)(({ classes }) => (
  <Button colour="primary" variant="text">
    Primary <Icon className={classes.rightIcon} />
  </Button>
))

storiesOf('Buttons', module)
  .addDecorator(GridDecorator)
  .add('text', () => (
    colours.map((colour, index) =>
      <Grid item>
        <Button key={index} variant="text" colour={colour} onClick={action(colour)}>
          {colour}
        </Button>
      </Grid>
    )
  ))
  .add('outlined', () => (
    colours.map((colour, index) =>
      <Grid item>
        <Button key={index} variant="outlined" colour={colour} onClick={action(colour)}>
          {colour}
        </Button>
      </Grid>
    )
  ))
  .add('contained', () => (
    colours.map((colour, index) =>
      <Grid item>
        <Button key={index} variant="contained" colour={colour} onClick={action(colour)}>
          {colour}
        </Button>
      </Grid>
    )
  ))
  .add('sizes', () => (
    sizes.map((size, index) =>
      <Grid item>
        <Button key={index} variant="contained" size={size} onClick={action(size)}>
          {size}
        </Button>
      </Grid>
    )
  ))
  .add('icons', () => (
    <Grid item>
      <IconButton />
    </Grid>
  ))
