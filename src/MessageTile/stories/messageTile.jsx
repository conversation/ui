import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import MessageTile, { MessageTile as UnwrappedMessageTile } from '../MessageTile'
import MessageTileHeader from '../MessageTileHeader'
import MessageTileBody from '../MessageTileBody'
import MessageTileButton from '../MessageTileButton'
import { action } from '@storybook/addon-actions'

import by from './by.svg'
import cc from './cc.svg'
import nd from './nd.svg'

import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='MessageTile' component={UnwrappedMessageTile}>
    <div style={{ marginTop: 16, width: 220 }}>
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
    </div>
  </ComponentOverview>
)
