import React from 'react'
import { mount } from 'enzyme'

import Swatch from './Swatch'
import Paper from '@material-ui/core/Paper'
import ThemeProvider from '../styles/ThemeProvider'
import Typography from '../Typography'

import defaultTheme from '../styles/themes/default'

describe('<Swatch />', () => {
  const theme = defaultTheme()

  it('renders a <Paper> element', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Swatch colour='primary' variant='main' />
      </ThemeProvider>
    ).find(Paper)
    const backgroundColor = theme.palette.primary.main
    expect(wrapper.props().style).toEqual({ backgroundColor })
  })

  it('renders a <Typography> element', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Swatch colour='primary' variant='light' />
      </ThemeProvider>
    ).find(Typography)
    const color = theme.palette.primary.contrastText
    expect(wrapper.at(0).props().children).toBe('primary')
    expect(wrapper.at(0).props().style).toEqual({ color })
    expect(wrapper.at(1).props().children).toBe('light')
    expect(wrapper.at(1).props().style).toEqual({ color })
  })
})
