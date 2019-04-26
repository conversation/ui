import MaterialIconButton from '@material-ui/core/IconButton'
import React from 'react'
import { shallow, mount } from 'enzyme'

import Button from '../Button'
import DonationDialog from './DonationDialog'

describe('<DonationDialog />', () => {
  describe('onClick callback', () => {
    it('is called when button is clicked', () => {
      const onClick = jest.fn()
      const wrapper = shallow(<DonationDialog open onClick={onClick} />)
      wrapper.dive().find(Button).simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('onClose callback', () => {
    it('is called when dialog is closed', () => {
      const onClose = jest.fn()
      const wrapper = shallow(<DonationDialog open onClose={onClose} />)
      wrapper.dive().find(MaterialIconButton).simulate('click')
      expect(onClose).toHaveBeenCalled()
    })
  })

  describe('onVisible callback', () => {
    it('is called when the dialog is opened', () => {
      const onVisible = jest.fn()
      mount(<DonationDialog open onVisible={onVisible} />)
      expect(onVisible).toHaveBeenCalled()
    })
  })
})
