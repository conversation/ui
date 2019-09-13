import { storiesOf } from '@storybook/react'

import articleDonationBanner from './articleDonationBanner'
import donationBanner from './donationBanner'
import donationDialog from './donationDialog'
import ThickBanner from './ThickBanner'
import thinDonationBanner from './thinDonationBanner'

storiesOf('Promos', module)
  .add('ArticleDonationBanner', articleDonationBanner)
  .add('DonationBanner', donationBanner)
  .add('DonationDialog', donationDialog)
  .add('ThickBanner', ThickBanner)
  .add('ThinDonationBanner', thinDonationBanner)
