import { storiesOf } from '@storybook/react'

import date from './date'
import datetime from './datetime'
import time from './time'
import usage from './usage'

storiesOf('Pickers', module)
  .add('Date', date)
  .add('Time', time)
  .add('Date Time', datetime)
  .add('Usage', usage)
