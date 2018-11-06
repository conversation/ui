import React from 'react'

import { Paper, Typography, withStyles } from '../index'

const styles = {
  root: {
    width: 120,
    height: 120,
    marginBottom: 16
  },
  label: {
    paddingTop: 8,
    paddingLeft: 8,
    textTransform: 'capitalize'
  }
}

/**
 * The Swatch component is used in our styleguide to show examples of colours
 * used in our palette.
 */
const Swatch = ({ classes, colour, theme, variant }) => {
  const value = theme.palette[colour]
  const variantName = variant !== 'main' ? variant : ''

  return (
    <Paper className={classes.root} style={{ backgroundColor: value[variant] }}>
      <div className={classes.label}>
        <Typography style={{ color: value.contrastText }}>
          {colour}
        </Typography>
        <Typography style={{ color: value.contrastText }} variant="caption">
          {variantName}
        </Typography>
      </div>
    </Paper>
  )
}

Swatch.defaultProps = {
  variant: 'main'
};

export default withStyles(styles, { withTheme: true })(Swatch)
