import 'typeface-libre-baskerville'
import 'typeface-montserrat'
import 'typeface-noto-sans'

import React from 'react'
import { ThemeProvider } from '../src'
import { addDecorator, configure } from '@storybook/react'

function loadStories () {
  importAll(require.context('../src', true, /.stories.jsx?$|stories\/index.jsx?$/))
}

function importAll (r) {
  r.keys().sort((a, b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()
    return a < b ? -1 : (a > b ? 1 : 0)
  }).forEach(r)
}

const CenterDecorator = story => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
)

addDecorator(CenterDecorator)

configure(loadStories, module)
