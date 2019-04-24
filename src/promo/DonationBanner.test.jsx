import React from 'react'
import { shallow } from 'enzyme'

import DonationBanner from './DonationBanner'

import MaterialIconButton from '@material-ui/core/IconButton'

describe('<DonationBanner />', () => {
  describe('onClose callback', () => {
    it('is called when close button is clicked', () => {
      const onClose = jest.fn()
      const wrapper = shallow(<DonationBanner open onClose={onClose}>foo</DonationBanner>)
      wrapper.dive().find(MaterialIconButton).simulate('click')
      expect(onClose).toHaveBeenCalled()
    })
  })
})
