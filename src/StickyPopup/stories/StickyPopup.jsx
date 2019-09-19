import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import { action } from '@storybook/addon-actions'

import Button from '../../Button'
import StickyPopup, { StickyPopup as UnwrappedStickyPopup } from '../StickyPopup'
import Typography from '../../Typography'

import accentTheme from '../../styles/themes/accent'

class ExampleStickyPopup extends React.Component {
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
      <ThemeProvider theme={accentTheme()}>
        <Button
          colour='primary'
          onClick={this.handleOpen}
          style={{ clear: 'both', margin: '16px 0' }}
        >Toggle StickyPopup message</Button>

        <StickyPopup
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          color='primary'
          dismissable
          onClose={this.handleClose}
          open={this.state.open}
          prominent
        >
          <Typography variant='h5'>
            Join over 100,000 Australians who value free evidence-based news.
          </Typography>

          <Button variant='contained' onClick={action('click')}>
            Sign up today
          </Button>
        </StickyPopup>
      </ThemeProvider>
    )
  }
}

export default () => (
  <ComponentOverview heading='StickyPopup' component={UnwrappedStickyPopup}>
    <ExampleStickyPopup />
  </ComponentOverview>
)
