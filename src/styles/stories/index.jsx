import { storiesOf } from '@storybook/react'

import colours from './colours'
import theme from './theme'

storiesOf('Styles', module)
  .add('Theme', theme)
  .add('Colours', colours)
