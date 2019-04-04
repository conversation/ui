import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputBase from '@material-ui/core/InputBase'
import React from 'react'
import { mount, shallow } from 'enzyme'

import FormLabel from '../form/FormLabel'
import TextField from './TextField'

describe('<TextField />', () => {
  it('passes props to the InputBase component', () => {
    const wrapper = shallow(
      <TextField value='foo' />
    ).dive().find(InputBase)
    expect(wrapper.props().value).toBe('foo')
  })

  describe('with autoComplete', () => {
    it('converts a true value to "on" for the autoComplete prop', () => {
      const wrapper = shallow(
        <TextField autoComplete />
      ).dive().find(InputBase)
      expect(wrapper.props().autoComplete).toBe('on')
    })

    it('converts a false value to "off" for the autoComplete prop', () => {
      const wrapper = shallow(
        <TextField autoComplete={false} />
      ).dive().find(InputBase)
      expect(wrapper.props().autoComplete).toBe('off')
    })

    it('passes a string value for the autoComplete prop', () => {
      const wrapper = shallow(
        <TextField autoComplete='foo' />
      ).dive().find(InputBase)
      expect(wrapper.props().autoComplete).toBe('foo')
    })
  })

  describe('when disabled', () => {
    it('disables the form control', () => {
      const wrapper = shallow(
        <TextField disabled />
      ).dive().find(FormControl)
      expect(wrapper.props().disabled).toBe(true)
    })
  })

  describe('with label', () => {
    it('renders a label', () => {
      const wrapper = shallow(
        <TextField label='lorem' />
      ).dive().find(FormLabel)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the htmlFor prop', () => {
      const wrapper = shallow(
        <TextField id='foo' label='lorem' />
      ).dive().find(FormLabel)
      expect(wrapper.props().htmlFor).toBe('foo')
    })
  })

  describe('with helper text', () => {
    it('renders helper text', () => {
      const wrapper = shallow(
        <TextField helperText='lorem' />
      ).dive().find(FormHelperText)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the helper text ID', () => {
      const wrapper = shallow(
        <TextField helperText='lorem' id='foo' />
      ).dive().find(FormHelperText)
      expect(wrapper.props().id).toBe('foo-helper-text')
    })
  })

  describe('events', () => {
    describe('when changed', () => {
      it('calls the callback', () => {
        const onChange = jest.fn()
        const wrapper = mount(<TextField onChange={onChange} />)
        wrapper.find('input').simulate('change')
        expect(onChange).toHaveBeenCalled()
      })
    })

    describe('when gains focus', () => {
      it('calls the callback', () => {
        const onFocus = jest.fn()
        const wrapper = mount(<TextField onFocus={onFocus} />)
        wrapper.find('input').simulate('focus')
        expect(onFocus).toHaveBeenCalled()
      })
    })

    describe('when loses focus', () => {
      it('calls the callback', () => {
        const onBlur = jest.fn()
        const wrapper = mount(<TextField onBlur={onBlur} />)
        wrapper.find('input').simulate('blur')
        expect(onBlur).toHaveBeenCalled()
      })
    })
  })
})
