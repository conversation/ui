import { storiesOf } from '@storybook/react'

import StickyPopup from './StickyPopup'
import Examples from './Examples'
import ClickAwayClose from './ClickAwayClose'

storiesOf('StickyPopup', module)
  .add('Overview', StickyPopup)
  .add('Examples', Examples)
  .add('Click-away close', ClickAwayClose)
