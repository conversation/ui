import { storiesOf } from '@storybook/react'

import content from './content'
import overview from './overview'

storiesOf('Dialogs', module)
  .add('Overview', overview)
  .add('Content', content)
