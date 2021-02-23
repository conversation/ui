import React from 'react'
import { shallow } from 'enzyme'

import SelectMenu from './SelectMenu'

describe('<SelectMenu />', () => {
  const commonProps = {
    anchorEl: undefined,
    open: true,
    onClose: () => {}
  }

  const wrapper = shallow(<SelectMenu {...commonProps}>Menu items</SelectMenu>)

  it('renders the children', () => {
    expect(wrapper.text()).toEqual('Menu items')
  })

  it('passes other props to the popover component', () => {
    const contextProps = { ...commonProps, something: 'more', anything: 'else' }
    const contextWrapper = shallow(<SelectMenu {...contextProps}>Menu items</SelectMenu>)

    expect(contextWrapper.props()).toEqual(expect.objectContaining({
      anything: 'else',
      something: 'more'
    }))
  })
})
