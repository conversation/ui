import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Button, Dialog, DialogAction, DialogActions, DialogContent, DialogTitle, Typography } from '../../index'
import { GridLayout } from '../../util'

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const md = `
# Content

The \`<Dialog>\` component contains sub-components which define the title,
content, and actions.

~~~js
<Dialog>
  <DialogTitle>Title</DialogTitle>
  <DialogContent>
    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </DialogContent>
  <DialogActions>
    <DialogAction variant='primary'>Close</DialogAction>
  </DialogAction>
</Dialog>
~~~

## Example

<!-- STORY -->
`

class ExampleDialog extends React.Component {
  state = {
    open: false
  }

  handleOpen = event => {
    action('open')(event)
    this.setState({ open: true })
  }

  handleClose = event => {
    action('close')(event)
    this.setState({ open: false })
  }

  render () {
    return (
      <React.Fragment>
        <Button colour='primary' onClick={this.handleOpen}>Open Dialog</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Title</DialogTitle>
          <DialogContent>
            <Typography variant='subtitle1'>{LIPSUM}</Typography>
          </DialogContent>
          <DialogActions>
            <DialogAction onClick={this.handleClose} variant='primary'>OK</DialogAction>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default withDocs(md, () =>
  <GridLayout>
    <ExampleDialog />
  </GridLayout>
)
