import MaterialDialogActions from '@material-ui/core/DialogActions'
import React from 'react'

import { withStyles } from '../index'

const styles = {
  root: {
    margin: '20px 20px'
  }
}

/**
 * Overrides the Material DialogActions component with some custom styles.
 */
const DialogActions = ({ children, ...other }) => (
  <MaterialDialogActions {...other}>
    {children}
  </MaterialDialogActions>
)

export default withStyles(styles)(DialogActions)
