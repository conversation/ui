import Button from '../Button'
import MaterialIconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { shallow } from 'enzyme'

import DonationBanner from './DonationBanner'

describe('<DonationBanner />', () => {
  it('is is visible when the "open" prop is true', () => {
    const wrapper = shallow(<DonationBanner open>foo</DonationBanner>)
    expect(wrapper.dive().find(Paper).length).toBe(1)
    wrapper.setProps({ open: false })
    expect(wrapper.dive().find(Paper).length).toBe(0)
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
