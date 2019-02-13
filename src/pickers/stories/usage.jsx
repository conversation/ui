import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import MomentUtils from '@date-io/moment'
import { DatePicker, DateTimePicker, TimePicker } from '../..'
import { GridLayout } from '../../util'

const md = `
# Usage

~~~js
import MomentUtils from '@date-io/moment';

<DatePicker dateManagementLibrary={MomentUtils} onChange={alert('date changed')} />
<TimePicker dateManagementLibrary={MomentUtils} onChange={alert('date changed')} />
<DateTimePicker dateManagementLibrary={MomentUtils} onChange={alert('date changed')} />
~~~

## Example

<!-- STORY -->
`

const changeDate = (momentDate) => {
  action('changed-date')(momentDate)
}

export default withDocs(md, () =>
  <GridLayout>
    <DatePicker dateManagementLibrary={MomentUtils} onChange={changeDate} />
    <TimePicker dateManagementLibrary={MomentUtils} onChange={changeDate} />
    <DateTimePicker dateManagementLibrary={MomentUtils} onChange={changeDate} />
  </GridLayout>
)
