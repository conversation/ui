import Button from '@material-ui/core/Button'
import MomentUtils from '@date-io/moment'
import React from 'react'
import { TimePicker as MaterialDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { mount, shallow } from 'enzyme'

import TimePicker from './TimePicker'

describe('<TimePicker />', () => {
  it('maps the date management library prop', () => {
    const wrapper = shallow(
      <TimePicker dateManagementLibrary={MomentUtils} onChange={() => {}} />
    ).find(MuiPickersUtilsProvider)
    expect(wrapper.props().utils).toBe(MomentUtils)
  })

  it('passes props to Material UI time picker', () => {
    const wrapper = shallow(
      <TimePicker ampm dateManagementLibrary={MomentUtils} onChange={() => {}} />
    ).find(MaterialDateTimePicker)
    expect(wrapper.props().ampm).toBe(true)
  })

  describe('when changed', () => {
    it("calls the onChange handler when clicking OK's dialog", () => {
      const onChange = jest.fn()
      const wrapper = mount(
        <TimePicker dateManagementLibrary={MomentUtils} onChange={onChange} />
      )

      wrapper.find('input').simulate('click')
      wrapper.find(Button, { children: 'OK' }).at(1).simulate('click')

      expect(onChange).toHaveBeenCalled()
    })
  })
})
