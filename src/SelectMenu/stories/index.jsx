import { storiesOf } from '@storybook/react'

import examples from './usage'
import overview from './overview'

storiesOf('SelectMenu', module)
  .add('Overview', overview)
  .add('Usage', examples)
