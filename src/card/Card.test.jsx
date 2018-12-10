import MaterialCard from '@material-ui/core/Card'
import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('<Card />', () => {
  it('renders the children', () => {
    const wrapper = shallow(
      <Card>lorem</Card>
    ).dive().find(MaterialCard)
    expect(wrapper.contains('lorem')).toBe(true)
  })

  it('passes props to Material UI', () => {
    const wrapper = shallow(<Card raised>lorem ipsum</Card>)
    expect(wrapper.props().raised).toBe(true)
  })
})
