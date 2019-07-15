import MessageTileBody from './MessageTileBody'
import React from 'react'
import { mount } from 'enzyme'

import Typography from '../Typography'

describe('<MessageTileBody />', () => {
  describe('children', () => {
    it('is rendered inside a Typography component', () => {
      const wrapper = mount(<MessageTileBody>Body of message tile</MessageTileBody>)

      expect(wrapper.find(Typography).text()).toEqual('Body of message tile')
    })
  })
})
