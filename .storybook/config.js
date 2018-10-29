import { configure } from '@storybook/react'

import 'bootstrap/dist/css/bootstrap.css'

function loadStories () {
  importAll(require.context('../src', true, /.stories.jsx?$/))
}

function importAll (r) {
  r.keys().forEach(r)
}

configure(loadStories, module)
