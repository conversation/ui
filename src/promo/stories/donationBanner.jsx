import ComponentOverview from '../../ComponentOverview'
import DonationBanner, { DonationBanner as UnwrappedDonationBanner } from '../DonationBanner'
import React, { useState } from 'react'
import { Button } from '../../index'
import { action } from '@storybook/addon-actions'

function ExampleBanner () {
  const [open, setOpen] = useState(true)

  const handleClick = event => {
    action('clicked')(event)
  }

  const handleClose = event => {
    setOpen(false)
    action('close')(event)
  }

  const handleOpen = event => {
    setOpen(true)
    action('open')(event)
  }

  return (
    <ComponentOverview heading='DonationBanner' component={UnwrappedDonationBanner}>
      <div className='markdown-body'>
        <h2>Example</h2>
      </div>

      {!open && <Button colour='primary' onClick={handleOpen}>Open Banner</Button>}

      <DonationBanner onClick={handleClick} onClose={handleClose} open={open}>
        The Conversation provides clean information in a world infected with spin. Please donate.
      </DonationBanner>
    </ComponentOverview>
  )
}

export default () => (
  <ExampleBanner />
)
