import { storiesOf } from '@storybook/react'

import overview from './overview'
import themeSelector from './themeSelector'

storiesOf('ThemeSelector', module)
  .add('Overview', overview)
  .add('Usage', themeSelector)
