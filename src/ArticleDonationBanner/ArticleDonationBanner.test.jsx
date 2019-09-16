/**
 * @jest-environment node
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85#gistcomment-2911761
 */

import React from 'react'
import { shallow } from 'enzyme'

import ArticleDonationBanner from './ArticleDonationBanner'
import Button from '../Button'

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

  describe('onClick callback', () => {
    it('is called when button is clicked', () => {
      const onClick = jest.fn()
      const wrapper = shallow(
        <ArticleDonationBanner onClick={onClick}>
          <div>foo</div>
          <div key='attribution'>bar</div>
        </ArticleDonationBanner>
      )
      wrapper.dive().find(Button).simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })
})
