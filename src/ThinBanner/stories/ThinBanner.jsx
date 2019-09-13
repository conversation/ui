import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import Typography from '../../Typography'
import ThinBanner, { ThinBanner as UnwrappedThinBanner } from '../ThinBanner'
import { action } from '@storybook/addon-actions'

import accentTheme from '../../styles/themes/accent'
import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='ThinBanner' component={UnwrappedThinBanner}>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Default Theme
    </Typography>

    <ThemeProvider theme={defaultTheme()}>
      <ThinBanner color='primary' onClick={action('clicked')}>
        Stay informed with email updates
      </ThinBanner>

      <ThinBanner color='secondary' onClick={action('clicked')}>
        Stay informed with email updates
      </ThinBanner>
    </ThemeProvider>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Core Theme
    </Typography>

    <ThemeProvider theme={coreTheme()}>
      <ThinBanner color='primary' onClick={action('clicked')}>
        Stay informed with email updates
      </ThinBanner>

      <ThinBanner color='secondary' onClick={action('clicked')}>
        Stay informed with email updates
      </ThinBanner>
    </ThemeProvider>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Accent Theme
    </Typography>

    <ThemeProvider theme={accentTheme()}>
      <ThinBanner color='primary' onClick={action('clicked')}>
        Let us know what you think by taking part in our yearly survey
      </ThinBanner>

      <ThinBanner color='secondary' onClick={action('clicked')}>
        Let us know what you think by taking part in our yearly survey
      </ThinBanner>
    </ThemeProvider>
  </ComponentOverview>
)
