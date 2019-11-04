import MessageTileAttribution from './MessageTileAttribution'
import React from 'react'
import { mount } from 'enzyme'

describe('<MessageTileAttribution />', () => {
  describe('children', () => {
    it('is rendered inside a div', () => {
      const wrapper = mount(<MessageTileAttribution>Name and Job</MessageTileAttribution>)

      expect(wrapper.find('div').text()).toEqual('Name and Job')
    })
  })
})
