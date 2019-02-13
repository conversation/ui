import Button from '@material-ui/core/Button'
import MomentUtils from '@date-io/moment'
import React from 'react'
import { DatePicker as MaterialDatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'
import { mount, shallow } from 'enzyme'

import DatePicker from './DatePicker'

describe('<DatePicker />', () => {
  it('maps the date management library prop', () => {
    const wrapper = shallow(
      <DatePicker dateManagementLibrary={MomentUtils} onChange={() => {}} />
    ).find(MuiPickersUtilsProvider)
    expect(wrapper.props().utils).toBe(MomentUtils)
  })

  it('passes props to Material UI date picker', () => {
    const wrapper = shallow(
      <DatePicker ampm dateManagementLibrary={MomentUtils} onChange={() => {}} />
    ).find(MaterialDatePicker)
    expect(wrapper.props().ampm).toBe(true)
  })

  describe('when changed', () => {
    it("calls the onChange handler when clicking OK's dialog", () => {
      const onChange = jest.fn()
      const wrapper = mount(
        <DatePicker dateManagementLibrary={MomentUtils} onChange={onChange} />
      )

      wrapper.find('input').simulate('click')
      wrapper.find(Button, { children: 'OK' }).at(1).simulate('click')

      expect(onChange).toHaveBeenCalled()
    })
  })
})
