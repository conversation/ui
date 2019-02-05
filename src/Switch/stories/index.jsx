import { storiesOf } from '@storybook/react'

import colours from './colours'
import overview from './overview'

storiesOf('Switches', module)
  .add('Overview', overview)
  .add('Colours', colours)
