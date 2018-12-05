import { storiesOf } from '@storybook/react'

import colours from './colours'
import overview from './overview'
import sizes from './sizes'
import variants from './variants'

storiesOf('Buttons', module)
  .add('Overview', overview)
  .add('Colours', colours)
  .add('Sizes', sizes)
  .add('Variants', variants)
