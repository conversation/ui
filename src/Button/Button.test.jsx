import React from 'react'
import { mount } from 'enzyme'

import Button from './Button'

describe('<Button />', () => {
  describe('when clicked', () => {
    const onClick = jest.fn()
    const wrapper = mount(<Button onClick={onClick}>Click Me!</Button>)

    it('calls the callback', () => {
      wrapper.find("button").simulate("click")
      expect(onClick).toHaveBeenCalled()
    })
  })
})
