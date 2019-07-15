import MessageTileButton from './MessageTileButton'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from '../Button'

describe('<MessageTileButton />', () => {
  it('button is rendered, with children as the button text', () => {
    const wrapper = shallow(<MessageTileButton>Do the thing!</MessageTileButton>).dive()

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
