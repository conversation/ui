import { storiesOf } from '@storybook/react'

import content from './content'
import overview from './overview'
import raised from './raised'

storiesOf('Cards', module)
  .add('Overview', overview)
  .add('Content', content)
  .add('Raised', raised)
