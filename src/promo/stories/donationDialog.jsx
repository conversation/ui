import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  Button,
  DonationDialog,
  DialogInlineTitle,
  DialogAvatar,
  DialogContent,
  MiniDivider,
  Person,
  Typography
} from '../../index'

// TODO: can we teach ComponentOverview to autodive hoc wrapped things?
import { DonationDialog as UnwrappedDonationDialog } from '../DonationDialog'

import koala from './koala.png'

const CONTENT = 'Koalas want to eat leaves and sleep all day, they need your help to achieve this ideal lifestyle. By donating $5 today, you can help keep koalas safe from Instagrammers and robot vacuum cleaners.'

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
      <ComponentOverview heading='DonationDialog' component={UnwrappedDonationDialog}>
        <React.Fragment>
          <div className='markdown-body'>
            <h2>Example</h2>
          </div>

          <Button colour='primary' onClick={this.handleOpen}>Open Dialog</Button>
          <DonationDialog onClick={action('clicked')} open={this.state.open} onClose={this.handleClose} donateText='Donate now'>
            <DialogAvatar src={koala} />
            <DialogInlineTitle>Support close combat training for koalas</DialogInlineTitle>
            <DialogContent>
              <Typography variant='body2'>{CONTENT}</Typography>
              <MiniDivider />
              <Person name='Colonel Koala' caption='Leader of the Koala Freedom Collective' />
            </DialogContent>
          </DonationDialog>
        </React.Fragment>
      </ComponentOverview>
    )
  }
}

export default () => (
  <ExampleDialog />
)
