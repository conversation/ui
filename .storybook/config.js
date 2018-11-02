import 'typeface-roboto';
import React from 'react'
import { ThemeProvider } from '../src'
import { addDecorator, configure } from '@storybook/react'

function loadStories () {
  importAll(require.context('../src', true, /.stories.jsx?$/))
}

function importAll (r) {
  r.keys().forEach(r)
}

const CenterDecorator = story => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
)

addDecorator(CenterDecorator)

configure(loadStories, module)
