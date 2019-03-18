import { storiesOf } from '@storybook/react'

import overview from './overview'
import events from './events'
import states from './states'

storiesOf('Dropdowns', module)
  .add('Overview', overview)
  .add('States', states)
  .add('Events', events)
