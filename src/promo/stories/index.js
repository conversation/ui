import { storiesOf } from '@storybook/react'

import articleDonationBanner from './articleDonationBanner'
import donationBanner from './donationBanner'
import thinDonationBanner from './thinDonationBanner'

storiesOf('Promos', module)
  .add('DonationBanner', donationBanner)
  .add('ThinDonationBanner', thinDonationBanner)
  .add('ArticleDonationBanner', articleDonationBanner)
