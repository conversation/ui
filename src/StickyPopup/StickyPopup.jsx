import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import withStyles from '@material-ui/core/styles/withStyles'

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]]

const styles = theme => ({
  root: {
    position: 'relative',
    backgroundColor: styledBy('color', {
      default: theme.palette.primary.main,
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main
    }),
    color: styledBy('color', {
      default: theme.palette.primary.contrastText,
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText
    })
  },

  message: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    textAlign: 'center',
    maxWidth: 360,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    // To give the children (except the last one) spacing between items.
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(2)
    }
  },
})

/**
 * The `<StickyPopup>` component informs users of something while still allowing the
 * user to interact with the rest of the page.
 */
export const StickyPopup = ({
  anchorOrigin,
  autoHideDuration,
  children,
  classes,
  color,
  open,
  onClose
}) => {
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={onClose}
    >
      <SnackbarContent
        classes={classes}
        color={color}
        message={children}
      />
    </Snackbar>
  )
}

StickyPopup.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  autoHideDuration: null,
  children: {},
  color: 'default',
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
   * Optional colour to override the default colour.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'inherit']),

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
