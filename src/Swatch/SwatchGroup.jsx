import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '../Typography'

const styles = {
  root: {
    overflow: 'auto',
    borderRadius: 0,
    clear: 'left',
    display: 'block',
    marginBottom: 20
  }
}

/**
 * The SwatchGroup component is used in our styleguide to contain examples of the
 * colours used in our palette.
 */
const SwatchGroup = ({ classes, children, groupLabel }) => {
  return (

    <div className={classes.root}>
      <Typography variant='h6'>{groupLabel}</Typography>
      {children}
    </div>
  )
}

SwatchGroup.propTypes = {
  /**
   * Overrides the styles applied to the component.
   */
  children: PropTypes.object,

  /**
   * The colour of the swatch.
   */
  groupLabel: PropTypes.string
}

export default withStyles(styles, { withTheme: true })(SwatchGroup)
