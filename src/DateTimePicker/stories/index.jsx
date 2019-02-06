import { storiesOf } from '@storybook/react'

import usage from './usage'
import overview from './overview'

storiesOf('DateTimePicker', module)
  .add('Overview', overview)
  .add('Usage', usage)
