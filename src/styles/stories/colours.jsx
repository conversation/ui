import React from 'react'

import { ThemeProvider } from '../'
import { Swatch, SwatchGroup } from '../../Swatch'
import Typography from '../../Typography'

import accentTheme from '../themes/accent'
import coreTheme from '../themes/core'
import defaultTheme from '../themes/default'

const COLOURS = ['primary', 'secondary', 'error']

export default () => {
  return (
    <React.Fragment>
      <Typography style={{ clear: 'both' }} variant='h4'>Primary</Typography>
      <ThemeProvider theme={defaultTheme()}>
        <SwatchGroup groupLabel={'Default'}>
          {COLOURS.map((colour) =>
            <div>
              <Swatch colour={colour} />
            </div>
          )}
        </SwatchGroup>
      </ThemeProvider>

      <Typography style={{ clear: 'both' }} variant='h4'>Extended</Typography>
      <ThemeProvider theme={coreTheme()}>
        <SwatchGroup groupLabel={'Core'}>
          {COLOURS.map((colour) =>
            <div>
              <Swatch colour={colour} />
            </div>
          )}
        </SwatchGroup>
      </ThemeProvider>

      <ThemeProvider theme={accentTheme()}>
        <SwatchGroup groupLabel={'Accent'}>
          {COLOURS.map((colour) =>
            <div>
              <Swatch colour={colour} />
            </div>
          )}
        </SwatchGroup>
      </ThemeProvider>
    </React.Fragment>
  )
}
