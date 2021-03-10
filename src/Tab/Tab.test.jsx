import React from 'react'
import { shallow } from 'enzyme'
import MUITab from '@material-ui/core/Tab'

import Tab from './Tab'

describe('<Tab />', () => {
  it('renders MUI Tab component, passing all of its props', () => {
    const wrapper = shallow(<Tab foo='bar' />)

    expect(wrapper.find(MUITab).props()).toEqual({
      disableRipple: true,
      foo: 'bar'
    })
  })
})
