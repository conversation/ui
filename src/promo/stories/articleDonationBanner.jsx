import ArticleDonationBanner, { ArticleDonationBanner as UnwrappedArticleDonationBanner } from '../ArticleDonationBanner'
import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { Avatar, Person, Typography } from '../../index'
import { action } from '@storybook/addon-actions'

import koala from './koala.png'

export default () => (
  <ComponentOverview heading='ArticleDonationBanner' component={UnwrappedArticleDonationBanner}>
    <div className='markdown-body'>
      <h2>Example</h2>
    </div>

    <ArticleDonationBanner onClick={action('clicked')} donateText='Donate now'>
      <Typography variant='h6' gutterBottom>Before you go...</Typography>
      <Typography variant='body1' paragraph>
        The Conversation serves society by making knowledge accessible to everyone, not just a select few. Our only agenda is a better informed public. If you care about what we do please make a donation now and help secure our future.
      </Typography>
      <div key='attribution'>
        <Typography gutterBottom>
          <Person name='Misha Ketchell' caption='Editor' />
        </Typography>
        <Avatar size={48} src={koala} />
      </div>
    </ArticleDonationBanner>
  </ComponentOverview>
)
