import MessageTileFooter from './MessageTileFooter'
import React from 'react'
import { mount } from 'enzyme'

describe('<MessageTileFooter />', () => {
  describe('children', () => {
    it('is rendered inside a div', () => {
      const wrapper = mount(<MessageTileFooter>Name and Job</MessageTileFooter>)

      expect(wrapper.find('div').text()).toEqual('Name and Job')
    })
  })
})
