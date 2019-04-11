import MaterialButton from '@material-ui/core/Button'
import React from 'react'
import { mount, shallow } from 'enzyme'

import Button from './Button'

describe('<Button />', () => {
  it('maps the colour prop', () => {
    const wrapper = shallow(
      <Button colour='primary'>Click Me!</Button>
    ).dive().find(MaterialButton)
    expect(wrapper.props().color).toBe('primary')
  })

  it('passes props to Material UI', () => {
    const wrapper = shallow(
      <Button disabled>Click Me!</Button>
    ).dive().find(MaterialButton)
    expect(wrapper.props().disabled).toBe(true)
  })

  describe('when clicked', () => {
    it('calls the onClick handler', () => {
      const onClick = jest.fn()
      const wrapper = mount(
        <Button onClick={onClick}>Click Me!</Button>
      ).find('button')
      wrapper.simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })
})
