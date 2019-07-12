import { storiesOf } from '@storybook/react'

import articleDonationBanner from './articleDonationBanner'
import donationBanner from './donationBanner'
import donationDialog from './donationDialog'
import ThinBanner from './ThinBanner'
import thinDonationBanner from './thinDonationBanner'
import messageTile from './messageTile'

storiesOf('Promos', module)
  .add('ArticleDonationBanner', articleDonationBanner)
  .add('DonationBanner', donationBanner)
  .add('DonationDialog', donationDialog)
  .add('ThinBanner', ThinBanner)
  .add('ThinDonationBanner', thinDonationBanner)
  .add('MessageTile', messageTile)
