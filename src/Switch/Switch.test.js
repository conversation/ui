import MaterialSwitch from '@material-ui/core/Switch'
import React from 'react'
import { mount, shallow } from 'enzyme'

import Switch from './Switch'

describe('<Switch />', () => {
  it('maps the colour prop', () => {
    const wrapper = shallow(
      <Switch colour='primary' />
    ).find(MaterialSwitch)
    expect(wrapper.props().color).toBe('primary')
  })

  it('passes props to Material UI', () => {
    const wrapper = shallow(
      <Switch disabled />
    ).find(MaterialSwitch)
    expect(wrapper.props().disabled).toBe(true)
  })

  describe('when changed', () => {
    it('calls the onChange handler', () => {
      const onChange = jest.fn()
      const wrapper = mount(
        <Switch onChange={onChange} />
      ).find('input')
      wrapper.simulate('change')
      expect(onChange).toHaveBeenCalled()
    })
  })
})
