import MaterialDialogContent from '@material-ui/core/DialogContent'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  root: {
    padding: 24
  }
}

/**
 * Overrides the Material DialogContent component with some custom styles.
 */
const DialogContent = ({ children, ...other }) => (
  <MaterialDialogContent {...other}>
    {children}
  </MaterialDialogContent>
)

export default withStyles(styles)(DialogContent)
