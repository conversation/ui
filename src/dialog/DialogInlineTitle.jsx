import MaterialDialogTitle from '@material-ui/core/DialogTitle'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Typography from '../Typography'

const styles = theme => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0
  }
})

/**
 * Overrides the Material DialogTitle component with some custom styles to
 * make it slightly less prominent.
 */
const DialogInlineTitle = ({ children, ...other }) => (
  <MaterialDialogTitle disableTypography {...other}>
    <Typography color='inherit' variant='h4'>
      {children}
    </Typography>
  </MaterialDialogTitle>
)

export default withStyles(styles)(DialogInlineTitle)
