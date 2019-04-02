import React from 'react'
import { mount } from 'enzyme'

import Autocomplete from './Autocomplete'
import TextField from '../TextField'

const suggestions = [
  { value: 'AU', label: 'Australia' },
  { value: 'NZ', label: 'New Zealand' }
]

describe('<Autocomplete />', () => {
  describe('when disabled', () => {
    it('disables the text field', () => {
      const wrapper = mount(
        <Autocomplete disabled />
      ).find(TextField)
      expect(wrapper.props().disabled).toBe(true)
    })
  })

  describe('with error', () => {
    it('sets the text field error state', () => {
      const wrapper = mount(
        <Autocomplete error />
      ).find(TextField)
      expect(wrapper.props().error).toBe(true)
    })
  })

  describe('with an ID', () => {
    it('sets the text field ID', () => {
      const wrapper = mount(
        <Autocomplete id='foo' />
      ).find(TextField)
      expect(wrapper.props().id).toBe('foo')
    })

    it('sets a default downshift generated ID', () => {
      const wrapper = mount(
        <Autocomplete />
      ).find(TextField)
      expect(wrapper.props().id).toMatch(/downshift-\d*-input/)
    })
  })

  describe('with a name', () => {
    it('sets the input field name', () => {
      const wrapper = mount(
        <Autocomplete name='name' />
      ).find(TextField)
      expect(wrapper.props().name).toBe('name')
    })

    it('does not add a name field', () => {
      const wrapper = mount(
        <Autocomplete />
      ).find(TextField)
      expect(wrapper.props().name).toBe(undefined)
    })
  })

  describe('with label', () => {
    it('renders a label', () => {
      const wrapper = mount(
        <Autocomplete label='lorem' />
      ).find(TextField)
      expect(wrapper.props().label).toBe('lorem')
    })
  })

  describe('with helper text', () => {
    it('renders helper text', () => {
      const wrapper = mount(
        <Autocomplete helperText='lorem' />
      ).find(TextField)
      expect(wrapper.props().helperText).toBe('lorem')
    })
  })

  describe('events', () => {
    describe('when changed', () => {
      it('calls the callback', () => {
        const onChange = jest.fn()
        const wrapper = mount(
          <Autocomplete onChange={onChange} suggestions={suggestions} />
        )

        // Type the prefix.
        wrapper.find('input').simulate('change', { target: { value: 'aus' } })

        // Choose the suggestion.
        wrapper.find('MenuItem').simulate('click')

        expect(onChange).toHaveBeenCalledWith({ value: 'AU', label: 'Australia' })
      })
    })

    describe('when focussed', () => {
      it('calls the callback', () => {
        const onFocus = jest.fn()
        const wrapper = mount(
          <Autocomplete onFocus={onFocus} suggestions={suggestions} />
        )
        wrapper.find('input').simulate('focus')
        expect(onFocus).toHaveBeenCalled()
      })
    })

    describe('when blurred', () => {
      it('calls the callback', () => {
        const onBlur = jest.fn()
        const wrapper = mount(
          <Autocomplete onBlur={onBlur} suggestions={suggestions} />
        )
        wrapper.find('input').simulate('blur')
        expect(onBlur).toHaveBeenCalled()
      })
    })
  })
})
