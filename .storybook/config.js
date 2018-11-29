import 'typeface-libre-baskerville'
import 'typeface-montserrat'
import 'typeface-noto-sans'

import React from 'react'
import { ThemeProvider } from '../src'
import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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

addDecorator(withInfo({ inline: true }))
addDecorator(CenterDecorator)

configure(loadStories, module)
