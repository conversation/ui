import React from 'react'
import { mount } from 'enzyme'

import TextField from './TextField'

describe('<TextField />', () => {
  describe('when changed', () => {
    it('calls the callback', () => {
      const onChange = jest.fn()
      const wrapper = mount(<TextField onChange={onChange} />)
      wrapper.find('input').simulate('change')
      expect(onChange).toHaveBeenCalled()
    })
  })
})
