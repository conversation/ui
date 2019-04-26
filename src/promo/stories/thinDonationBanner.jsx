import React from 'react'
import ComponentOverview from '../../ComponentOverview'
import ThinDonationBanner, { ThinDonationBanner as UnwrappedThinDonationBanner } from '../ThinDonationBanner'

export default () => (
  <ComponentOverview heading='ThinDonationBanner' component={UnwrappedThinDonationBanner}>
    <div className='markdown-body'>
      <h2>Example</h2>
    </div>

    <ThinDonationBanner>
      Rebuild trust in experts. Donate now.
    </ThinDonationBanner>
  </ComponentOverview>
)
