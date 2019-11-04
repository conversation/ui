import MessageTileButton from './MessageTileButton'
import React from 'react'
import { mount } from 'enzyme'
import Button from '../Button'

describe('<MessageTileButton />', () => {
  it('button is rendered, with children as the button text', () => {
    const wrapper = mount(<MessageTileButton>Do the thing!</MessageTileButton>)

    expect(wrapper.find(Button).text()).toEqual('Do the thing!')
  })

  describe('onClick callback', () => {
    it('is called when button is clicked', () => {
      const onClick = jest.fn()
      const wrapper = mount(<MessageTileButton onClick={onClick}>Click me</MessageTileButton>)
      wrapper.find(Button).simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })
})
