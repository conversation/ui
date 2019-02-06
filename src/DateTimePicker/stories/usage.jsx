import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import MomentUtils from '@date-io/moment'
import { DateTimePicker } from '../../index'
import { GridLayout } from '../../util'

const md = `
# Usage

~~~js
import MomentUtils from '@date-io/moment';

<DateTimePicker dateManagementLibrary={MomentUtils} onChange={alert('date changed')} />
~~~

## Example

<!-- STORY -->
`

class ExampleDatePicker extends React.Component {
  changeDate = (momentDate) => {
    action('changed-date')(momentDate)
  }

  render () {
    return (
      <DateTimePicker dateManagementLibrary={MomentUtils} onChange={this.changeDate} />
    )
  }
}

export default withDocs(md, () =>
  <GridLayout>
    <ExampleDatePicker />
  </GridLayout>
)
