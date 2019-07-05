import Button from '../Button'
import ThinBanner from './ThinBanner'
import React from 'react'
import { mount } from 'enzyme'

describe('<ThinBanner />', () => {
  describe('onClick callback', () => {
    it('is called when button is clicked', () => {
      const onClick = jest.fn()
      const wrapper = mount(<ThinBanner onClick={onClick}>foo</ThinBanner>)
      wrapper.find(Button).simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })
})
