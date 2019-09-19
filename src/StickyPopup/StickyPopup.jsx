import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import withStyles from '@material-ui/core/styles/withStyles'

import StickyPopupDismiss from './StickyPopupDismiss'

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

  prominent: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },

  action: {
    padding: 0,
    margin: 0
  }
})

/**
 * The `<StickyPopup>` component informs users of something while still allowing the
 * user to interact with the rest of the page.
 *
 * To change the colour of the StickyPopup, wrap it in a ThemeProvider, pick a theme,
 * and select a `color` ala: ['default' | 'inherit' | 'primary' | 'secondary']
 *
 * ~~~js
<ThemeProvider theme={defaultTheme()}>
  <StickyPopup
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    open={this.state.open}
    color="primary"
    onClose={this.handleClose}
    dismissable={true}
  >
    <Typography variant="subtitle1">
      Join over 100,000 Australians who value free evidence-based news.
    </Typography>

    <Button variant="contained" onClick={action("click")}>
      Sign up today
    </Button>
  </StickyPopup>
</ThemeProvider />
 * ~~~
 */
export const StickyPopup = ({
  anchorOrigin,
  autoHideDuration,
  children,
  classes,
  color,
  dismissable,
  open,
  prominent,
  onClose
}) => {
  const action = dismissable ? <StickyPopupDismiss onClose={onClose} /> : null
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={onClose}
    >
      <SnackbarContent
        className={prominent ? classes.prominent : null}
        classes={classes}
        color={color}
        message={children}
        action={action}
      />
    </Snackbar>
  )
}

StickyPopup.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  autoHideDuration: null,
  children: {},
  color: 'default',
  dismissable: false,
  open: true,
  prominent: false
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
   * Optionally show a dismissable icon top right.
   */
  dismissable: PropTypes.bool,

  /**
   * The callback called when button is clicked.
   */
  onClose: PropTypes.func.required,

  /**
   * If true, the StickyPopup is shown.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Optionally boolean to give the message have more padding
   */
  prominent: PropTypes.bool
}

export default withStyles(styles)(StickyPopup)
