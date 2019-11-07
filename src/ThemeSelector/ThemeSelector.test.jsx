import React from 'react'
import { mount } from 'enzyme'

import ThemeProvider from '../styles/ThemeProvider'
import accentTheme from '../styles/themes/accent'
import coreTheme from '../styles/themes/core'
import defaultTheme from '../styles/themes/default'

import ThemeSelector from './ThemeSelector'

describe('<ThemeSelector />', () => {
  describe('theme', () => {
    describe('accepts a string "core"', () => {
      it('passes the core theme to the ThemeProvider component', () => {
        const wrapper = mount(<ThemeSelector theme='core'>Hello</ThemeSelector>)
        expect(wrapper.find(ThemeProvider).props().theme).toBe(coreTheme())
      })
    })

    describe('accepts a string "accent"', () => {
      it('passes the accent theme to the ThemeProvider component', () => {
        const wrapper = mount(<ThemeSelector theme='accent'>Hello</ThemeSelector>)
        expect(wrapper.find(ThemeProvider).props().theme).toBe(accentTheme())
      })
    })

    describe('accepts a string "default"', () => {
      it('passes the default theme to the ThemeProvider component', () => {
        const wrapper = mount(<ThemeSelector theme='default'>Hello</ThemeSelector>)
        expect(wrapper.find(ThemeProvider).props().theme).toBe(defaultTheme())
      })
    })

    describe('accepts no value', () => {
      it('passes the default theme to the ThemeProvider component', () => {
        const wrapper = mount(<ThemeSelector>Hello</ThemeSelector>)
        expect(wrapper.find(ThemeProvider).props().theme).toBe(defaultTheme())
      })
    })
  })
})
