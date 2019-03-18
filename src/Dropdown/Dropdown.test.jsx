import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import React from 'react'
import Select from '@material-ui/core/Select'
import { mount, shallow } from 'enzyme'

import Dropdown from './Dropdown'
import FormLabel from '../form/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'

describe('<Dropdown />', () => {
  it('renders the children', () => {
    const wrapper = shallow(
      <Dropdown>
        <MenuItem value='1'>one</MenuItem>
        <MenuItem value='2'>two</MenuItem>
        <MenuItem value='3'>two</MenuItem>
      </Dropdown>
    ).dive().find(Select)
    expect(wrapper.childAt(0).props().value).toBe('1')
    expect(wrapper.childAt(1).props().value).toBe('2')
    expect(wrapper.childAt(2).props().value).toBe('3')
  })

  it('passes props to the Select component', () => {
    const wrapper = shallow(
      <Dropdown value='foo'>
        <MenuItem value='1'>one</MenuItem>
      </Dropdown>
    ).dive().find(Select)
    expect(wrapper.props().value).toBe('foo')
  })

  describe('when disabled', () => {
    it('disables the form control', () => {
      const wrapper = shallow(
        <Dropdown disabled>
          <MenuItem value='1'>one</MenuItem>
          <MenuItem value='2'>two</MenuItem>
        </Dropdown>
      ).dive().find(FormControl)
      expect(wrapper.props().disabled).toBe(true)
    })
  })

  describe('with label', () => {
    it('renders a label', () => {
      const wrapper = shallow(
        <Dropdown label='lorem'>
          <MenuItem value='1'>one</MenuItem>
        </Dropdown>
      ).dive().find(FormLabel)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the htmlFor prop', () => {
      const wrapper = shallow(
        <Dropdown id='foo' label='lorem'>
          <MenuItem value='1'>one</MenuItem>
        </Dropdown>
      ).dive().find(FormLabel)
      expect(wrapper.props().htmlFor).toBe('foo')
    })
  })

  describe('with helper text', () => {
    it('renders helper text', () => {
      const wrapper = shallow(
        <Dropdown helperText='lorem'>
          <MenuItem value='1'>one</MenuItem>
        </Dropdown>
      ).dive().find(FormHelperText)
      expect(wrapper.contains('lorem')).toBe(true)
    })

    it('sets the helper text ID', () => {
      const wrapper = shallow(
        <Dropdown helperText='lorem' id='foo'>
          <MenuItem value='1'>one</MenuItem>
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
            <MenuItem value='1'>one</MenuItem>
            <MenuItem value='2'>two</MenuItem>
          </Dropdown>
        )
        wrapper.find('[role="button"]').simulate('click')
        wrapper.find(MenuItem).at(1).simulate('click')
        expect(onChange).toHaveBeenCalled()
      })
    })

    describe('when gains focus', () => {
      it('calls the callback', () => {
        const onFocus = jest.fn()
        const wrapper = mount(
          <Dropdown value='' onFocus={onFocus}>
            <MenuItem value='1'>one</MenuItem>
          </Dropdown>
        )
        wrapper.find('div[role="button"]').simulate('focus')
        expect(onFocus).toHaveBeenCalled()
      })
    })

    describe('when loses focus', () => {
      it('calls the callback', () => {
        const onBlur = jest.fn()
        const wrapper = mount(
          <Dropdown value='' onBlur={onBlur}>
            <MenuItem value='1'>one</MenuItem>
          </Dropdown>
        )
        wrapper.find('div[role="button"]').simulate('blur')
        expect(onBlur).toHaveBeenCalled()
      })
    })
  })
})
