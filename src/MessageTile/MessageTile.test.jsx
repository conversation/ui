import MessageTile from './MessageTile'
import React from 'react'
import { shallow } from 'enzyme'
import Box from '@material-ui/core/Box'

describe('<MessageTile />', () => {
  describe('renders a Box', () => {
    it('button is shown if provided', () => {
      const wrapper = shallow(<MessageTile>Hello</MessageTile>).dive()

      expect(wrapper.find(Box).length).toEqual(1)
    })
  })
})
