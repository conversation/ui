import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Dialog, DialogAction, DialogActions, DialogContent, DialogTitle, TextField, Typography, withStyles } from '../index'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
})

const Form = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <TextField fullWidth label='Email Address' placeholder='foo@bar.com' />
  </div>
))

storiesOf('Dialogs', module)
  .add('basic', () => (
    <Dialog onClose={action('close')} open>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <Typography>To subscribe to this website, please enter your email address here. We will send updates occasionally.</Typography>
        <Form />
      </DialogContent>
      <DialogActions>
        <DialogAction onClick={action('click')}>Cancel</DialogAction>
        <DialogAction onClick={action('click')} variant='primary'>Subscribe</DialogAction>
      </DialogActions>
    </Dialog>
  ))