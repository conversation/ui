import { storiesOf } from '@storybook/react'

import content from './content'
import overview from './overview'
import donationDialog from './donationDialog'

storiesOf('Dialogs', module)
  .add('Overview', overview)
  .add('Content', content)
  .add('Donation Dialog', donationDialog)
