import ComponentOverview from '../../ComponentOverview'
import React, { useState } from 'react'
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

function ExampleDialog () {
  const [open, setOpen] = useState(false)

  const handleClick = event => {
    action('clicked')(event)
  }

  const handleOpen = event => {
    action('open')(event)
    setOpen(true)
  }

  const handleClose = event => {
    action('close')(event)
    setOpen(false)
  }

  return (
    <ComponentOverview heading='DonationDialog' component={UnwrappedDonationDialog}>
      <React.Fragment>
        <div className='markdown-body'>
          <h2>Example</h2>
        </div>

        <Button colour='primary' onClick={handleOpen}>Open Dialog</Button>

        <DonationDialog onClick={handleClick} open={open} onClose={handleClose} donateText='Donate now'>
          <DialogAvatar src={koala} />
          <DialogInlineTitle>Support close combat training for koalas</DialogInlineTitle>
          <DialogContent>
            <Typography variant='subtitle1'>{CONTENT}</Typography>
            <MiniDivider />
            <Person name='Colonel Koala' caption='Leader of the Koala Freedom Collective' />
          </DialogContent>
        </DonationDialog>
      </React.Fragment>
    </ComponentOverview>
  )
}

export default () => (
  <ExampleDialog />
)
