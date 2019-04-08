import React from 'react'

import { Swatch } from '../../index'
import { GridLayout } from '../../util'

const COLOURS = ['neutral', 'core', 'accent', 'positive', 'aware']

export default () => (
  <GridLayout>
    {COLOURS.map((colour, index) =>
      <div key={index}>
        {/* <Swatch colour={colour} /> */}
        <Swatch colour={colour} variant='900' />
        <Swatch colour={colour} variant='800' />
        <Swatch colour={colour} variant='700' />
        <Swatch colour={colour} variant='600' />
        <Swatch colour={colour} variant='400' />
        <Swatch colour={colour} variant='200' />
        <Swatch colour={colour} variant='50' />
        <Swatch colour={colour} variant='40' />
        <Swatch colour={colour} variant='0' />
      </div>
    )}
  </GridLayout>
)
