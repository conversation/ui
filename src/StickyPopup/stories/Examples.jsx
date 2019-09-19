import React from 'react'
import { ThemeProvider } from '../../styles'
import { action } from '@storybook/addon-actions'
import { GridLayout } from '../../util'

import Button from '../../Button'
import Typography from '../../Typography'
import StickyPopup from '../StickyPopup'

import accentTheme from '../../styles/themes/accent'
import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

class RepublishingStickyPopup extends React.Component {
  state = {
    open: false
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
        >Toggle Republishing-related StickyPopup message</Button>

        <StickyPopup
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          color='primary'
          dismissable
          onClose={this.handleClose}
          open={this.state.open}
          prominent
        >
          <Typography variant='h5'>
            We believe in the free flow of information
          </Typography>

          <Typography variant='subtitle1'>
            Republish our articles for free, online or in print, under Creative Commons licence.
          </Typography>

          <Button variant='contained' color='secondary' onClick={action('click')}>
            Republsh this article
          </Button>
        </StickyPopup>
      </ThemeProvider>
    )
  }
}

class DonationStickyPopup extends React.Component {
  state = {
    open: false
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
        >Toggle Donation-related StickyPopup message</Button>

        <StickyPopup
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          color='primary'
          dismissable
          onClose={this.handleClose}
          open={this.state.open}
        >
          <Typography variant='subtitle2'>
            The Conversation provides clean information in a world infected with spin.
          </Typography>

          <Button variant='contained' onClick={action('click')}>
            Donate now
          </Button>
        </StickyPopup>
      </ThemeProvider>
    )
  }
}

class NewsletterStickyPopup extends React.Component {
  state = {
    open: false
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
        >Toggle Newsletter-related StickyPopup message</Button>

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

          <Button variant='contained' color='secondary' onClick={action('click')}>
            Sign up today
          </Button>
        </StickyPopup>
      </ThemeProvider>
    )
  }
}

export default () => (
  <GridLayout>
    <DonationStickyPopup />
    <RepublishingStickyPopup />
    <NewsletterStickyPopup />
  </GridLayout>
)
