import Button from '../Button'
import Paper from '@material-ui/core/Paper'
import MaterialIconButton from '@material-ui/core/IconButton'
import ThickBanner from './ThickBanner'
import React from 'react'
import { mount } from 'enzyme'

describe('<ThickBanner />', () => {
  it('is is visible when the "open" prop is true', () => {
    const wrapper = mount(<ThickBanner buttonText='Click me' open>foo</ThickBanner>)
    expect(wrapper.find(Paper).length).toBe(1)
    wrapper.setProps({ open: false })
    expect(wrapper.find(Paper).length).toBe(0)
  })

  describe('onClick callback', () => {
    it('is called when button is clicked', () => {
      const onClick = jest.fn()
      const wrapper = mount(<ThickBanner open buttonText='Click me' onClick={onClick}>foo</ThickBanner>)
      wrapper.find(Button).simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('onClose callback', () => {
    it('is called when close button is clicked', () => {
      const onClose = jest.fn()
      const wrapper = mount(<ThickBanner open buttonText='Click me' onClose={onClose}>foo</ThickBanner>)
      wrapper.find(MaterialIconButton).simulate('click')
      expect(onClose).toHaveBeenCalled()
    })
  })
})
