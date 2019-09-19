import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({})

/**
 * The `<StickyPopup>` component informs users of something while still allowing the
 * user to interact with the rest of the page.
 */
export const StickyPopup = ({
  anchorOrigin,
  autoHideDuration,
  children,
  open,
  onClose
}) => {
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={onClose}
      message={children}
    />
  )
}

StickyPopup.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  autoHideDuration: null,
  children: {},
  open: true
}

StickyPopup.propTypes = {
  /**
   * Optional number of milliseconds until the StickyPopup should disappear.
   * `null` to disable.
   */
  autoHideDuration: PropTypes.oneOf([PropTypes.number, PropTypes.null]),

  /**
  * The placement of the StickyPopup
  */
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['left', 'center', 'right']),
    horizontal: PropTypes.oneOf(['top', 'bottom'])
  }),

  /**
  * The content of the StickyPopup.
  */
  children: PropTypes.node.isRequired,

  /**
   * The callback called when button is clicked.
   */
  onClose: PropTypes.func.required,

  /**
   * If true, the StickyPopup is shown.
   */
  open: PropTypes.bool.isRequired
}

export default withStyles(styles)(StickyPopup)
