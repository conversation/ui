import React from 'react'
import ComponentOverview from '../../ComponentOverview'
import DonationBanner, { DonationBanner as UnwrappedDonationBanner } from '../DonationBanner'

export default () => (
  <ComponentOverview heading='DonationBanner' component={UnwrappedDonationBanner}>
    <div className='markdown-body'>
      <h2>Example</h2>
    </div>

    <DonationBanner href='http://donate.theconverastion.com'>
      The Conversation provides clean information in a world infected with spin. Please donate.
    </DonationBanner>
  </ComponentOverview>
)
