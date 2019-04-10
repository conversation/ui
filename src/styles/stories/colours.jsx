import React from 'react'

import { Swatch } from '../../index'
import { GridLayout } from '../../util'

const COLOURS = ['primary', 'secondary', 'error', 'core']
const VARIANTS = ['dark', 'main', 'light']

export default () => (
  <GridLayout>
    {VARIANTS.map((variant, index) =>
      <div key={index}>
        {COLOURS.map((colour, index2) =>
          <Swatch colour={colour} variant={variant} />
        )}
      </div>
    )}
  </GridLayout>
)
