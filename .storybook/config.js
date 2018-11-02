import 'typeface-roboto';
import React from 'react'
import { ThemeProvider, getDefaultTheme } from '../src'
import { addDecorator, configure } from '@storybook/react'

function loadStories () {
  importAll(require.context('../src', true, /.stories.jsx?$/))
}

function importAll (r) {
  r.keys().forEach(r)
}

const theme = getDefaultTheme();

const CenterDecorator = story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
)

addDecorator(CenterDecorator)

configure(loadStories, module)
