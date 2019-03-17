import { storiesOf } from '@storybook/react'

import overview from './overview'
import states from './states'
import types from './types'
import events from './events'

storiesOf('Text Fields', module)
  .add('Overview', overview)
  .add('States', states)
  .add('Types', types)
  .add('Events', events)
