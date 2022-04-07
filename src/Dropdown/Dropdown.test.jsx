import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import React from 'react'
import Select from '@material-ui/core/Select'
import { mount, shallow } from 'enzyme'

import Dropdown from './Dropdown'
import FormLabel from '../form/FormLabel'

describe('<Dropdown />', () => {
  it('renders the children', () => {
    const wrapper = shallow(
      <Dropdown>
        <option value='1'>one</option>
        <option value='2'>two</option>
        <option value='3'>two</option>
      </Dropdown>
    ).dive().find(Select)
    expect(wrapper.childAt(0).props().value).toBe('1')
    expect(wrapper.childAt(1).props().value).toBe('2')
    expect(wrapper.childAt(2).props().value).toBe('3')
  })

  it('passes props to the Select component', () => {
    const wrapper = shallow(
      <Dropdown id='abc-1' value='foo'>
        <option value='1'>one</option>
      </Dropdown>
    ).dive().find(Select)
    expect(wrapper.props().id).toBe('abc-1')
    expect(wrapper.props().value).toBe('foo')
  })

  describe('when disabled', () => {
    it('disables the form control', () => {
      const wrapper = shallow(
        <Dropdown disabled>
          <option value='1'>one</option>
          <option value='2'>two</option>
        </Dropdown>
      ).dive().find(FormControl)
      expect(wrapper.props().disabled).toBe(true)
    })
  })

  describe('with label', () => {
    it('renders a label', () => {
      const wrapper = shallow(
        <Dropdown label='lorem'>
          <option value='1'>one</option>
        </Dropdown>
      ).dive().find(FormLabel)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the htmlFor prop', () => {
      const wrapper = shallow(
        <Dropdown id='foo' label='lorem'>
          <option value='1'>one</option>
        </Dropdown>
      ).dive().find(FormLabel)
      expect(wrapper.props().htmlFor).toBe('foo')
    })
  })

  describe('with helper text', () => {
    it('renders helper text', () => {
      const wrapper = shallow(
        <Dropdown helperText='lorem'>
          <option value='1'>one</option>
        </Dropdown>
      ).dive().find(FormHelperText)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the helper text ID', () => {
      const wrapper = shallow(
        <Dropdown helperText='lorem' id='foo'>
          <option value='1'>one</option>
        </Dropdown>
      ).dive().find(FormHelperText)
      expect(wrapper.props().id).toBe('foo-helper-text')
    })
  })

  describe('events', () => {
    describe('when changed', () => {
      it('calls the callback', () => {
        const onChange = jest.fn()
        const wrapper = mount(
          <Dropdown value='' onChange={onChange}>
            <option value='1'>one</option>
            <option value='2'>two</option>
          </Dropdown>
        )
        wrapper.find('option').at(1).simulate('change', { target: { value: '1' } })
        expect(onChange).toHaveBeenCalled()
      })
    })

    describe('when gains focus', () => {
      it('calls the callback', () => {
        const onFocus = jest.fn()
        const wrapper = mount(
          <Dropdown value='' onFocus={onFocus}>
            <option value='1'>one</option>
          </Dropdown>
        )
        wrapper.find('option').at(0).simulate('focus')
        expect(onFocus).toHaveBeenCalled()
      })
    })

    describe('when loses focus', () => {
      it('calls the callback', () => {
        const onBlur = jest.fn()
        const wrapper = mount(
          <Dropdown value='' onBlur={onBlur}>
            <option value='1'>one</option>
          </Dropdown>
        )
        wrapper.find('option').at(0).simulate('blur')
        expect(onBlur).toHaveBeenCalled()
      })
    })
  })
})
