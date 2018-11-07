import React from 'react'

import { Paper, Typography, withStyles } from '../index'

const size = 120
const margin = 16
const styles = {
  root: {
    width: size,
    height: size,
    marginBottom: margin
  },
  label: {
    paddingTop: margin / 2,
    paddingLeft: margin / 2
  }
}

/**
 * The Swatch component is used in our styleguide to show examples of the
 * colours used in our palette.
 */
const Swatch = ({ classes, colour, theme, variant }) => {
  const value = theme.palette[colour]
  const variantName = variant !== 'main' ? variant : ''

  return (
    <Paper className={classes.root} style={{ backgroundColor: value[variant] }}>
      <div className={classes.label}>
        <Typography style={{ color: value.contrastText }} variant="button">
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
