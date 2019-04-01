import { storiesOf } from '@storybook/react'

import events from './events'
import overview from './overview'
import states from './states'

storiesOf('Autocomplete', module)
  .add('Overview', overview)
  .add('States', states)
  .add('Events', events)
