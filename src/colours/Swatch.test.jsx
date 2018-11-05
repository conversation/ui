import React from 'react'
import { mount } from 'enzyme'

import Swatch from './Swatch'
import { Paper, ThemeProvider, Typography, defaultTheme } from '../index'

describe('<Swatch />', () => {
  const theme = defaultTheme()

  it('renders a <Paper> element', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Swatch colour="primary" />
      </ThemeProvider>
    ).find(Paper)
    const backgroundColor = theme.palette.primary.main
    expect(wrapper.props().style).toEqual({ backgroundColor })
  })

  it('renders a <Typography> element', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Swatch colour="primary" />
      </ThemeProvider>
    ).find(Typography)
    const color = theme.palette.primary.contrastText
    expect(wrapper.props().children).toBe('primary')
    expect(wrapper.props().style).toEqual({ color })
  })
})
