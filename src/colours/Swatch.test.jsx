import React from 'react'
import { shallow } from 'enzyme'

import Swatch from './Swatch'
import { Paper, Typography, defaultTheme } from '../index'

describe('<Swatch />', () => {
  const theme = defaultTheme()

  it('renders a <Paper> element', () => {
    const wrapper = shallow(<Swatch colour="primary" />).dive()
    expect(wrapper.type()).toBe(Paper)
    expect(wrapper.props().style).toEqual({ backgroundColor: theme.palette.primary.main })
  })

  it('renders a <Typography> element', () => {
    const wrapper = shallow(<Swatch colour="primary" />).dive().childAt(0)
    expect(wrapper.type()).toBe(Typography)
    expect(wrapper.props().children).toBe('primary')
    expect(wrapper.props().style).toEqual({ color: theme.palette.primary.contrastText })
  })
})
