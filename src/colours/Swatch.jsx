import React from 'react'

import { Paper, Typography, withStyles } from '../index'

const styles = {
  root: {
    width: 120,
    paddingTop: 50,
    paddingBottom: 50
  }
}

/**
 * The Swatch component is used in our styleguide to show examples of colours
 * used in our palette.
 */
const Swatch = ({ classes, colour, theme }) => {
  const variant = theme.palette[colour]

  return (
    <Paper className={classes.root} style={{ backgroundColor: variant.main }}>
      <Typography align="center" style={{ color: variant.contrastText }} variant="button">
        {colour}
      </Typography>
    </Paper>
  )
}

export default withStyles(styles, { withTheme: true })(Swatch)
