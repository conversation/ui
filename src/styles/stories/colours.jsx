import React from 'react'

import { Swatch } from '../../index'
import { GridLayout } from '../../util'

const COLOURS = ['primary', 'secondary', 'error', 'success']

export default () => (
  <GridLayout>
    {COLOURS.map((colour, index) =>
      <div key={index}>
        <Swatch colour={colour} />
        <Swatch colour={colour} variant='dark' />
        <Swatch colour={colour} variant='light' />
      </div>
    )}
  </GridLayout>
)
