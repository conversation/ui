import { storiesOf } from '@storybook/react'

import articleDonationBanner from './articleDonationBanner'
import thinDonationBanner from './thinDonationBanner'

storiesOf('Promos', module)
  .add('ThinDonationBanner', thinDonationBanner)
  .add('ArticleDonationBanner', articleDonationBanner)
