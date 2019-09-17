import React from 'react';
import ComponentOverview from '../../ComponentOverview';
import { ThemeProvider } from '../../styles';
import { withDocs } from 'storybook-readme'
import { action } from '@storybook/addon-actions';
import { GridLayout } from '../../util'

import Button from '../../Button';
import Typography from '../../Typography';
import Snackbar from '@material-ui/core/Snackbar';
import StickyPopup, { StickyPopup as UnwrappedStickyPopup } from '../StickyPopup';
import StickyPopupDismiss from '../StickyPopupDismiss';

import accentTheme from '../../styles/themes/accent';
import coreTheme from '../../styles/themes/core';
import defaultTheme from '../../styles/themes/default';

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
            horizontal: 'left',
          }}
          open={this.state.open}
          color="primary"
          onClose={this.handleClose}
          dismissable={true}
        >
          <Typography variant="subtitle2">
            The Conversation provides clean information in a world infected with spin.
          </Typography>

          <Button variant="text" color="inherit" onClick={action("click")}>
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
            horizontal: 'right',
          }}
          open={this.state.open}
          color="primary"
          onClose={this.handleClose}
          dismissable={true}
        >
          <Typography variant="h5">
            Join over 100,000 Australians who value free evidence-based news.
          </Typography>

          <Button variant="contained" onClick={action("click")}>
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
    <NewsletterStickyPopup />
  </GridLayout>
)
