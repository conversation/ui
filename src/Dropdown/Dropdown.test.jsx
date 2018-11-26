import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import React from 'react'
import Select from '@material-ui/core/Select'
import { shallow } from 'enzyme'

import Dropdown from './Dropdown'
import FormLabel from '../TextField/FormLabel'
import { MenuItem } from '../index'

describe('<Dropdown />', () => {
  it('renders the children', () => {
    const wrapper = shallow(
      <Dropdown>
        <MenuItem value='1'>one</MenuItem>
        <MenuItem value='2'>two</MenuItem>
      </Dropdown>
    ).dive().find(Select)
    expect(wrapper.childAt(0).props().value).toBe('1')
    expect(wrapper.childAt(1).props().value).toBe('2')
  })

  it('passes props to the Select component', () => {
    const wrapper = shallow(
      <Dropdown value='foo' />
    ).dive().find(Select)
    expect(wrapper.props().value).toBe('foo')
  })

  describe('when disabled', () => {
    it('disables the form control', () => {
      const wrapper = shallow(
        <Dropdown disabled />
      ).dive().find(FormControl)
      expect(wrapper.props().disabled).toBe(true)
    })
  })

  describe('with label', () => {
    it('renders a label', () => {
      const wrapper = shallow(
        <Dropdown label='lorem' />
      ).dive().find(FormLabel)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the htmlFor prop', () => {
      const wrapper = shallow(
        <Dropdown id='foo' label='lorem' />
      ).dive().find(FormLabel)
      expect(wrapper.props().htmlFor).toBe('foo')
    })
  })

  describe('with helper text', () => {
    it('renders helper text', () => {
      const wrapper = shallow(
        <Dropdown helperText='lorem' />
      ).dive().find(FormHelperText)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the helper text ID', () => {
      const wrapper = shallow(
        <Dropdown helperText='lorem' id='foo' />
      ).dive().find(FormHelperText)
      expect(wrapper.props().id).toBe('foo-helper-text')
    })
  })
})
