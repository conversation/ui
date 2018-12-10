import { storiesOf } from '@storybook/react'

import colours from './colours'
import theme from './theme'
import typography from './typography'

storiesOf('Styles', module)
  .add('Theme', theme)
  .add('Colours', colours)
  .add('Typography', typography)
