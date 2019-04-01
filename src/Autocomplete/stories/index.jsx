import { storiesOf } from '@storybook/react'

import overview from './overview'
import states from './states'

storiesOf('Autocomplete', module)
  .add('Overview', overview)
  .add('States', states)
