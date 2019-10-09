import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import withStyles from '@material-ui/core/styles/withStyles'
import { styledBy } from '../util'
import StickyPopupDismiss from './StickyPopupDismiss'

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
    paddingTop: styledBy('prominent', {
      true: theme.spacing(5),
      false: theme.spacing(1)
    }),
    paddingBottom: styledBy('prominent', {
      true: theme.spacing(5),
      false: theme.spacing(1)
    }),
    margin: '0 auto',
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
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
  clickAwayClose,
  color,
  dismissable,
  open,
  prominent,
  onClose
}) => {
  const action = dismissable ? <StickyPopupDismiss onClose={onClose} /> : null
  const clickAwayAction = clickAwayClose ? onClose : () => {}
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={onClose}
      ClickAwayListenerProps={{ onClickAway: clickAwayAction }}
    >
      <SnackbarContent
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
  clickAwayClose: false,
  color: 'inherit',
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
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right'])
  }),

  /**
  * The content of the StickyPopup.
  */
  children: PropTypes.node.isRequired,

  /**
  * Should clicking outside of the StickyPopup close it
  */
  clickAwayClose: PropTypes.bool,

  /**
   * Optional colour to override the default colour.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),

  /**
   * Optionally show a dismissable icon top right.
   */
  dismissable: PropTypes.bool,

  /**
   * The callback called when button is clicked.
   */
  onClose: PropTypes.func,

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
