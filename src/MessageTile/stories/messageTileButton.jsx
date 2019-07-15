import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import MessageTileButton, { MessageTileButton as UnwrappedMessageTileButton } from '../MessageTileButton'
import { action } from '@storybook/addon-actions'

import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='MessageTileButton' component={UnwrappedMessageTileButton}>
    <div style={{ width: 220 }}>
      <ThemeProvider theme={defaultTheme()}>
        <MessageTileButton onClick={action('clicked')}>
          Republish for free
        </MessageTileButton>
      </ThemeProvider>
    </div>
  </ComponentOverview>
)
