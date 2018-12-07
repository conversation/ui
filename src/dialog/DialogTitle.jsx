import MaterialDialogTitle from '@material-ui/core/DialogTitle'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography } from '../index'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
})

/**
 * Overrides the Material DialogTitle component with some custom styles.
 */
const DialogTitle = ({ children, ...other }) => (
  <MaterialDialogTitle disableTypography {...other}>
    <Typography color='inherit' variant='h6'>
      {children}
    </Typography>
  </MaterialDialogTitle>
)

export default withStyles(styles)(DialogTitle)
