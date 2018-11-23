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
    paddingLeft: margin / 2,
    textTransform: 'capitalize'
  }
}

const ColourLabel = ({ label, colour, variant }) => (
  <Typography style={{ color: colour.contrastText }} variant={variant}>
    {label}
  </Typography>
)

/**
 * The Swatch component is used in our styleguide to show examples of the
 * colours used in our palette.
 */
const Swatch = ({ classes, colour, theme, variant, ...other }) => {
  const value = theme.palette[colour]

  return (
    <Paper className={classes.root} style={{ backgroundColor: value[variant] }}>
      <div className={classes.label}>
        <ColourLabel label={colour} colour={value} variant='button' />
        {variant !== 'main' ? <ColourLabel label={variant} colour={value} variant='caption' /> : null }
      </div>
    </Paper>
  )
}

Swatch.defaultProps = {
  variant: 'main'
}

export default withStyles(styles, { withTheme: true })(Swatch)
