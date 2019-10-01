import React from 'react'
import { ThemeProvider } from '../../styles'
import { action } from '@storybook/addon-actions'
import { GridLayout } from '../../util'
import { withDocs } from 'storybook-readme'

import Button from '../../Button'
import Typography from '../../Typography'
import StickyPopup from '../StickyPopup'

import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

class DefaultBehaviour extends React.Component {
  state = {
    open: true
  }

  handleOpen = event => {
    action('open')(event)
    this.setState({ open: !this.state.open })
  }

  handleClose = event => {
    action('close')(event)
    this.setState({ open: false })
  }

  render () {
    return (
      <ThemeProvider theme={coreTheme()}>
        <Button
          colour='primary'
          onClick={this.handleOpen}
          style={{ clear: 'both', margin: '16px 0' }}
        >Show ClickAwayClose="false" StickyPopup</Button>

        <StickyPopup
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          color='primary'
          dismissable
          onClose={this.handleClose}
          open={this.state.open}
          prominent
        >
          <Typography variant='h3'>
            This StickyPopup does not close if you click outside of it.
          </Typography>

          <Typography variant='h6'>
            This is the default behaviour.
          </Typography>
        </StickyPopup>
      </ThemeProvider>
    )
  }
};

class OptionalBehaviour extends React.Component {
  state = {
    open: true
  }

  handleOpen = event => {
    action('open')(event)
    this.setState({ open: !this.state.open })
  }

  handleClose = event => {
    action('close')(event)
    this.setState({ open: false })
  }

  render () {
    return (
      <ThemeProvider theme={defaultTheme()}>
        <Button
          colour='primary'
          onClick={this.handleOpen}
          style={{ clear: 'both', margin: '16px 0' }}
        >Show ClickAwayClose="true" StickyPopup</Button>

        <StickyPopup
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          clickAwayClose
          color='primary'
          dismissable
          onClose={this.handleClose}
          open={this.state.open}
          prominent
        >
          <Typography variant='h3'>
            This StickyPopup closes if you click outside of it.
          </Typography>

          <Typography variant='h6'>
            This is <em>optional</em> behaviour.
          </Typography>
        </StickyPopup>
      </ThemeProvider>
    )
  }
}

const md = `
# ClickAwayClose

The \`clickAwayClose\` boolean flag _by-default_ disables the click away handlers
that the underlying component (the SnackBar) build by default.


* if \`clickAwayClose\` is \`false\`, which is the default, it disables the click away handlers
* if \`clickAwayClose\` is \`true\`, it calls the \`onClose\` function when clicked outside of
the \`StickyPopup\` component.

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  <GridLayout>
    <DefaultBehaviour />
    <OptionalBehaviour />
  </GridLayout>
)
