import MaterialDialog from '@material-ui/core/Dialog'
import MaterialIconButton from '@material-ui/core/IconButton'
import MaterialDialogActions from '@material-ui/core/DialogActions'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import DialogActions from '../dialog/DialogActions'
import Button from '../Button'

const styles = theme => ({
  container: {
    // For small-medium devices, render the dialog container normally.
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      overflowY: 'auto',
      overflowX: 'hidden'
    },

    // For medium-large devices, render the dialog container in the centre.
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  paper: {
    // TODO: revisit palette colours with what we learned building
    // this component.
    backgroundColor: theme.palette.core && theme.palette.core.main,
    overflow: 'visible', // So we can have the avatar poking out the top
    color: theme.palette.primary.contrastText,
    margin: `48px ${theme.spacing.unit * 3}px`,
    textAlign: 'center',

    // For small devices, allow the dialog paper to be full width/height.
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'none'
    },

    // For medium-large devices, allow the dialog paper to be centred.
    [theme.breakpoints.up('sm')]: {
      flex: '0 1 auto',
      maxHeight: 'calc(100% - 96px)'
    }
  },
  topActions: {
    margin: 0
  },
  bottomActions: {
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: theme.spacing.unit * 6
  },
  close: {
    margin: theme.spacing.unit
  },
  // Donation button styles are a special case until we decide
  // "inverted" buttons are going to be a more widespread thing
  button: {
    // We need to mark the colour with `!important` to avoid global hyperlink
    // styles overriding this value.
    color: [theme.palette.text.primary, '!important'],
    backgroundColor: '#fff',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#f1f1f2'
    }
  }
})

/**
 * The `<DonationDialog>` component is special dialog intended to be only used
 * for donations campaigns. It has particular styles on it that make it stand
 * out a lot more than the regular `<Dialog>`, and a few more callbacks to hook
 * analytics in to.
 *
 * This should contain sub-components to define the title, content and so on.
 *
 * ~~~js
 * import { DialogAvatar, DialogInlineTitle, DialogContent } from '@theconversation/ui'
 *
 * <DonationDialog donateText="Donate now" closeText="close">
 *   <DialogAvatar src={koala} />
 *   <DialogInlineTitle>Support close combat training for koalas</DialogInlineTitle>
 *   <DialogContent>
 *     <Typography variant='body1'>{content}</Typography>
 *     <MiniDivider />
 *     <Person name="Colonel Koala" caption="Leader of the Koala Freedom Collective" />
 *   </DialogContent>
 * </DonationDialog>
 * ~~~
 *
 */
export const DonationDialog = ({
  children,
  classes,
  closeText,
  donateText,
  onClick,
  onClose,
  onVisible,
  open
}) => {
  const dialogProps = {
    open,
    onClose,
    onEnter: onVisible,
    classes: {
      container: classes.container,
      paper: classes.paper
    }
  }

  return (
    <MaterialDialog {...dialogProps}>
      <MaterialDialogActions className={classes.topActions}>
        <MaterialIconButton color='inherit' className={classes.close} onClick={onClose} aria-label={closeText}>
          <CloseIcon />
        </MaterialIconButton>
      </MaterialDialogActions>
      {children}
      <DialogActions className={classes.bottomActions}>
        <Button prominent className={classes.button} onClick={onClick}>
          {donateText}
        </Button>
      </DialogActions>
    </MaterialDialog>
  )
}

DonationDialog.propTypes = {
  /**
   * Any sub-components you want to render.
   */
  children: PropTypes.node,

  /**
   * The callback function called when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * The callback function called when the dialog is closed.
   */
  onClose: PropTypes.func,

  /**
   * The callback function called when the dialog is opened.
   */
  onVisible: PropTypes.func,

  /**
   * A boolean value indicating whether the dialog is currently displayed.
   */
  open: PropTypes.bool,

  /**
   * Text that appears in the donate button.
   */
  donateText: PropTypes.string,

  /**
   * Accessibility alt text that is associated with the close icon button.
   */
  closeText: PropTypes.string
}

DonationDialog.defaultProps = {
  open: false,
  donateText: 'Donate',
  closeText: 'Close'
}

export default withStyles(styles)(DonationDialog)
