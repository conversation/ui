import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import Typography from '../../Typography'
import MessageTile, { MessageTile as UnwrappedMessageTile } from '../MessageTile'
import MessageTileHeader from '../MessageTileHeader'
import MessageTileBody from '../MessageTileBody'
import MessageTileButton from '../MessageTileButton'
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
        <MessageTile>
          <MessageTileHeader>
            <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={by} />
            <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={cc} />
            <img style={{ width: 26, marginBottom: 8 }} src={nd} />
            <div>We believe in the free flow of information.</div>
          </MessageTileHeader>

          <MessageTileBody>
            All our articles can be republished for free, online or in print, under the Creative Commons licence.
          </MessageTileBody>

          <MessageTileButton onClick={action('clicked')}>
            Republish for free
          </MessageTileButton>
        </MessageTile>
      </ThemeProvider>

      <Typography
        style={{ clear: 'both', margin: '20px 0' }}
        variant='h4'
      >
        Core Theme
      </Typography>

      <div style={{ width: 220 }}>
        <ThemeProvider theme={coreTheme()}>
          <MessageTile>
            <MessageTileHeader>
              Support The Conversation. Please donate.
            </MessageTileHeader>

            <MessageTileBody>
              We provide clean information in a world infected with spin.
            </MessageTileBody>

            <MessageTileButton onClick={action('clicked')}>
              Donate now
            </MessageTileButton>
          </MessageTile>
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
          <MessageTile>
            <MessageTileHeader>
              Want to follow The Conversation?
            </MessageTileHeader>
            <MessageTileBody>
              Subscribe to our daily newsletter and get the latest analysis and commentary directly in your inbox.
            </MessageTileBody>
            <MessageTileButton onClick={action('clicked')}>
              Subscribe now
            </MessageTileButton>
          </MessageTile>
        </ThemeProvider>
      </div>
    </div>
  </ComponentOverview>
)
