import MaterialDialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * The `<Dialog>` component is a type of modal window that appears in front of
 * app content to provide critical information or ask the user to make a
 * decision. Dialogs disable all app functionality when they appear, and remain
 * on screen until confirmed, dismissed, or a required action has been taken.
 *
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 *
 * ~~~js
 * import { Dialog, DialogAction, DialogActions, DialogContent, DialogTitle } from '@theconversation/ui'
 *
 * <Dialog>
 *   <DialogTitle>Title</DialogTitle>
 *   <DialogContent>
 *     <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
 *   </DialogContent>
 *   <DialogActions>
 *     <DialogAction variant='primary'>Click Me!</DialogAction>
 *   </DialogActions>
 * </Dialog>
 * ~~~
 */
export const Dialog = ({ children, open, ...other }) => (
  <MaterialDialog {...other} open={open}>
    {children}
  </MaterialDialog>
)

Dialog.propTypes = {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node.isRequired,

  /**
   * The callback function called when the component requests to be closed.
   */
  onClose: PropTypes.func,

  /**
   * A boolean value indicating whether the dialog is currently displayed.
   */
  open: PropTypes.bool
}

Dialog.defaultProps = {
  open: false
}

export default Dialog
