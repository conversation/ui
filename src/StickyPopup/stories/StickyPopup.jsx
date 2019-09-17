import ComponentOverview from '../../ComponentOverview';
import React from 'react';
import { ThemeProvider } from '../../styles';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme'
import { GridLayout } from '../../util'

import Button from '../../Button';
import Typography from '../../Typography';
import Snackbar from '@material-ui/core/Snackbar';
import StickyPopup, { StickyPopup as UnwrappedStickyPopup } from '../StickyPopup';
import StickyPopupDismiss from '../StickyPopupDismiss';

import accentTheme from '../../styles/themes/accent';

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
  <ComponentOverview heading='StickyPopup' component={UnwrappedStickyPopup}>
    <ExampleStickyPopup />
  </ComponentOverview>
)
