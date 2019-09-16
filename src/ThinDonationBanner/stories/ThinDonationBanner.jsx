import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import ThinDonationBanner, { ThinDonationBanner as UnwrappedThinDonationBanner } from '../ThinDonationBanner'
import { action } from '@storybook/addon-actions'

export default () => (
  <ComponentOverview heading='ThinDonationBanner' component={UnwrappedThinDonationBanner}>
    <div className='markdown-body'>
      <h2>Example</h2>
    </div>

    <ThinDonationBanner onClick={action('clicked')}>
      Rebuild trust in experts. Donate now.
    </ThinDonationBanner>
  </ComponentOverview>
)
