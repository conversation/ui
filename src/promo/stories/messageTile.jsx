import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import Typography from '../../Typography'
import MessageTile, { MessageTile as UnwrappedMessageTile } from '../MessageTile'
import { action } from '@storybook/addon-actions'

import by from './by.svg'
import cc from './cc.svg'
import nd from './nd.svg'

import accentTheme from '../../styles/themes/accent'
import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='MessageTile' component={UnwrappedMessageTile}>
    <div style={{ width: 220 }}>
      <ThemeProvider theme={defaultTheme()}>
        <MessageTile
          title={
            <React.Fragment>
              <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={by} />
              <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={cc} />
              <img style={{ width: 26, marginBottom: 8 }} src={nd} />
              <div>We believe in the free flow of information.</div>
            </React.Fragment>
          }
          body='All our articles can be republished for free, online or in print, under the Creative Commons licence.'
          buttonText='Republish for free'
          onClick={action('clicked')}
        />
      </ThemeProvider>
    </div>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Core Theme
    </Typography>

    <div style={{ width: 220 }}>
      <ThemeProvider theme={coreTheme()}>
        <MessageTile
          title='Support The Conversation. Please donate.'
          body='We provide clean information in a world infected with spin.'
          buttonText='Donate now'
          onClick={action('clicked')}
        />
      </ThemeProvider>
    </div>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Accent Theme
    </Typography>

    <div style={{ width: 400 }}>
      <ThemeProvider theme={accentTheme()}>
        <MessageTile
          title='Want to follow The Conversation?'
          body='Subscribe to our daily newsletter and get the latest analysis and commentary directly in your inbox.'
          buttonText='Subscribe now'
          onClick={action('clicked')}
        />
      </ThemeProvider>
    </div>
  </ComponentOverview>
)
