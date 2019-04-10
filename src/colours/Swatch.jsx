import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '../Typography'

const size = 120
const margin = 16
const styles = {
  root: {
    width: size,
    height: size,
    marginBottom: margin,
    borderRadius: 0
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
    <Paper className={classes.root} elevation={0} style={{ backgroundColor: value[variant] }}>
      { value[variant]
        ? <div className={classes.label}>
          <ColourLabel label={colour} colour={value} variant='body2' />
          {variant !== 'main' ? <ColourLabel label={variant} colour={value} variant='caption' /> : null }
        </div> : null
      }
    </Paper>
  )
}

Swatch.propTypes = {
  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The colour of the swatch.
   */
  colour: PropTypes.oneOf(['primary', 'secondary', 'error']),

  /**
   * The variant of the swatch.
   */
  variant: PropTypes.oneOf(['main', 'light', 'dark'])
}

Swatch.defaultProps = {
  colour: 'primary',
  variant: 'main'
}

export default withStyles(styles, { withTheme: true })(Swatch)
