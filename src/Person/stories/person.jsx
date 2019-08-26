import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { Avatar, Person } from '../../index'
import { GridLayout } from '../../util'

export default () => (
  <ComponentOverview heading='Person' component={Person}>
    <GridLayout>
      <Person name='Colonel Koala' caption='Leader of the Koala Freedom Collective'>
        <Avatar />
      </Person>
    </GridLayout>

    <GridLayout>
      <Person name='From the whole Koala Army'>
        <Avatar />
      </Person>
    </GridLayout>
  </ComponentOverview>
)
