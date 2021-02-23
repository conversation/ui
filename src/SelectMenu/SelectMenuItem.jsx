import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'

import neutral from '../styles/palettes/neutral'

const styles = theme => ({
  root: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: `${neutral[40]} !important`
    }
  },
  divider: {
    borderBottom: `2px solid ${neutral[50]}`
  },
  selected: {
    // We need to mark the colour with `!important` to avoid MUI's selected list item global style override
    backgroundColor: `${neutral[0]} !important`
  }
})

/**
 * The `SelectMenuItem` component is a simple wrapper around MUI's `ListItem`, allowing
 * the user render any component inside a menu item of a `SelectMenu`
 */
const SelectMenuItem = ({
  children,
  onClick,
  selected,
  ...other
}) => (
  <ListItem
    divider
    component='div'
    onClick={onClick}
    selected={selected}
    {...other}
  >
    {children}
  </ListItem>
)

export default withStyles(styles)(SelectMenuItem)
