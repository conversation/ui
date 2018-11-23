import React from 'react'
import { mount, shallow } from 'enzyme'

import Button from './Button'

describe('<Button />', () => {
  it('maps the colour prop', () => {
    const wrapper = shallow(<Button colour='primary'>Click Me!</Button>)
    expect(wrapper.props().color).toBe('primary')
  })

  describe('when clicked', () => {
    it('calls the onClick handler', () => {
      const onClick = jest.fn()
      const wrapper = mount(<Button onClick={onClick}>Click Me!</Button>)
      wrapper.find('button').simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })
})
