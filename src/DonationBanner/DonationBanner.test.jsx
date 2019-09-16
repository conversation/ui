import Button from '../Button'
import DonationBanner from './DonationBanner'
import MaterialIconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import React from 'react'
import { shallow } from 'enzyme'

describe('<DonationBanner />', () => {
  it('is is visible when the "open" prop is true', () => {
    const wrapper = shallow(<DonationBanner open>foo</DonationBanner>)
    expect(wrapper.dive().find(Box).length).toBe(1)
    wrapper.setProps({ open: false })
    expect(wrapper.dive().find(Box).length).toBe(0)
  })

  describe('onClick callback', () => {
    it('is called when button is clicked', () => {
      const onClick = jest.fn()
      const wrapper = shallow(<DonationBanner open onClick={onClick}>foo</DonationBanner>)
      wrapper.dive().find(Button).simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('onClose callback', () => {
    it('is called when close button is clicked', () => {
      const onClose = jest.fn()
      const wrapper = shallow(<DonationBanner open onClose={onClose}>foo</DonationBanner>)
      wrapper.dive().find(MaterialIconButton).simulate('click')
      expect(onClose).toHaveBeenCalled()
    })
  })
})
