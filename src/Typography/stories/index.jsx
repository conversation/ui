import { storiesOf } from '@storybook/react'

import alignments from './alignments'
import colours from './colours'
import overview from './overview'
import variants from './variants'

storiesOf('Typography', module)
  .add('Overview', overview)
  .add('Alignments', alignments)
  .add('Colours', colours)
  .add('Variants', variants)
