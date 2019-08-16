import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import Typography from '../../Typography'
import ThickBanner, { ThickBanner as UnwrappedThickBanner } from '../ThickBanner'
import { action } from '@storybook/addon-actions'

import accentTheme from '../../styles/themes/accent'
import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='ThickBanner' component={UnwrappedThickBanner}>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Default Theme
    </Typography>

    <ThemeProvider theme={defaultTheme()}>
      <ThickBanner
        open
        buttonText='Subscribe'
        color='primary'
        onClose={action('closed')}
        onClick={action('clicked')}
      >
        Stay informed with email updates
      </ThickBanner>

      <ThickBanner
        open
        buttonText='Subscribe'
        color='secondary'
        onClose={action('closed')}
        onClick={action('clicked')}
      >
        Stay informed with email updates
      </ThickBanner>
    </ThemeProvider>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Core Theme
    </Typography>

    <ThemeProvider theme={coreTheme()}>
      <ThickBanner
        open
        buttonText='Donate Now'
        color='primary'
        onClose={action('closed')}
        onClick={action('clicked')}
      >
        The Conversation provides clean information in a world infected with spin. Please donate.
      </ThickBanner>

      <ThickBanner
        open
        buttonText='Donate Now'
        color='secondary'
        onClose={action('closed')}
        onClick={action('clicked')}
      >
        The Conversation provides clean information in a world infected with spin. Please donate.
      </ThickBanner>
    </ThemeProvider>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Accent Theme
    </Typography>

    <ThemeProvider theme={accentTheme()}>
      <ThickBanner
        open
        buttonText='Join Survey'
        color='primary'
        onClose={action('closed')}
        onClick={action('clicked')}
      >
        Let us know what you think by taking part in our yearly survey
      </ThickBanner>

      <ThickBanner
        open
        buttonText='Join Survey'
        color='secondary'
        onClose={action('closed')}
        onClick={action('clicked')}
      >
        Let us know what you think by taking part in our yearly survey
      </ThickBanner>
    </ThemeProvider>
  </ComponentOverview>
)
