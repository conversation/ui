import React from 'react'
import { mount } from 'enzyme'

import SelectMenuItem from './SelectMenuItem'

describe('<SelectMenuItem />', () => {
  const onClickSpy = jest.fn()
  const commonProps = {
    onClick: onClickSpy,
    selected: true
  }

  const wrapper = mount(<SelectMenuItem {...commonProps}>Menu item</SelectMenuItem>)

  it('renders the children', () => {
    expect(wrapper.text()).toEqual('Menu item')
  })

  it('passes other props to the popover component', () => {
    const contextProps = { ...commonProps, something: 'more', anything: 'else' }
    const contextWrapper = mount(<SelectMenuItem {...contextProps}>Menu item</SelectMenuItem>)

    expect(contextWrapper.props()).toEqual(expect.objectContaining({
      anything: 'else',
      something: 'more'
    }))
  })

  it('triggers onClick prop when clicked', () => {
    wrapper.simulate('click')

    expect(onClickSpy).toHaveBeenCalled()
  })
})
