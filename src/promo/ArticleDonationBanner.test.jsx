import React from 'react'
import { shallow } from 'enzyme'

import ArticleDonationBanner from './ArticleDonationBanner'

describe('<ArticleDonationBanner />', () => {
  describe('child node filtering', () => {
    it('renders donate button before children with key "attribution"', () => {
      const wrapper = shallow(
        <ArticleDonationBanner>
          <div>foo</div>
          <div key='attribution'>bar</div>
        </ArticleDonationBanner>
      ).dive()

      expect(wrapper.childAt(0).text()).toEqual('foo')
      expect(wrapper.childAt(1).html()).toContain('Donate')
      expect(wrapper.childAt(2).text()).toEqual('bar')
    })
  })
})
