import { storiesOf } from '@storybook/react'

import overview from './overview'
import events from './events'
import states from './states'
import variants from './variants'

storiesOf('Dropdowns', module)
  .add('Overview', overview)
  .add('States', states)
  .add('Events', events)
  .add('Variants', variants)
