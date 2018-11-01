import { configure } from '@storybook/react'

import '../src/style.scss'

function loadStories () {
  importAll(require.context('../src', true, /.stories.jsx?$/))
}

function importAll (r) {
  r.keys().forEach(r)
}

configure(loadStories, module)
