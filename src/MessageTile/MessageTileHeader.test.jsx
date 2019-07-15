import MessageTileHeader from './MessageTileHeader'
import React from 'react'
import { mount } from 'enzyme'

import Typography from '../Typography'

describe('<MessageTileHeader />', () => {
  describe('children', () => {
    it('is rendered inside a Typography component', () => {
      const wrapper = mount(<MessageTileHeader>Hello</MessageTileHeader>)

      expect(wrapper.find(Typography).text()).toEqual('Hello')
    })
  })
})
