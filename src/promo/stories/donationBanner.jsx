import React from 'react'
import ComponentOverview from '../../ComponentOverview'
import DonationBanner, { DonationBanner as UnwrappedDonationBanner } from '../DonationBanner'
import { action } from '@storybook/addon-actions'

export default () => (
  <ComponentOverview heading='DonationBanner' component={UnwrappedDonationBanner}>
    <div className='markdown-body'>
      <h2>Example</h2>
    </div>

    <DonationBanner onClick={action('clicked')}>
      The Conversation provides clean information in a world infected with spin. Please donate.
    </DonationBanner>
  </ComponentOverview>
)
