import React from 'react'
import { shallow } from 'enzyme'
import MUITabs from '@material-ui/core/Tabs'

import Tabs from './Tabs'

describe('<Tabs />', () => {
  it('renders MUI Tabs component, passing all of its props', () => {
    const wrapper = shallow(<Tabs foo='bar' />)

    expect(wrapper.find(MUITabs).props()).toEqual({
      indicatorColor: 'primary',
      foo: 'bar'
    })
  })
})
