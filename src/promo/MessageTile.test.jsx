import MessageTile from './MessageTile'
import React from 'react'
import { mount } from 'enzyme'

import Button from '../Button'
import Typography from '../Typography'

describe('<MessageTile />', () => {
  describe('onClick callback', () => {
    it('is called when button is clicked', () => {
      const onClick = jest.fn()
      const wrapper = mount(<MessageTile buttonText='Click me' onClick={onClick} />)
      wrapper.find(Button).simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('buttonText', () => {
    it('button is shown if provided', () => {
      const wrapper = mount(<MessageTile buttonText='Hello' />)

      expect(wrapper.find(Button).text()).toEqual('Hello')
    })

    it('button is not shown if not provided', () => {
      const wrapper = mount(<MessageTile />)
      expect(wrapper.find(Button).length).toEqual(0)
    })
  })

  describe('title', () => {
    it('is shown if provided', () => {
      const wrapper = mount(<MessageTile title='Hello' />)

      expect(wrapper.find(Typography).text()).toEqual('Hello')
    })

    it('is not shown if not provided', () => {
      const wrapper = mount(<MessageTile />)
      expect(wrapper.find(Typography).length).toEqual(0)
    })
  })

  describe('body', () => {
    it('is shown if provided', () => {
      const wrapper = mount(<MessageTile body='Hello' />)

      expect(wrapper.find(Typography).text()).toEqual('Hello')
    })

    it('is not shown if not provided', () => {
      const wrapper = mount(<MessageTile />)
      expect(wrapper.find(Typography).length).toEqual(0)
    })
  })
})
