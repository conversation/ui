import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import MessageTileBody, { MessageTileBody as UnwrappedMessageTileBody } from '../MessageTileBody'

import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='MessageTileBody' component={UnwrappedMessageTileBody}>
    <div style={{ width: 220 }}>
      <ThemeProvider theme={defaultTheme()}>
        <MessageTileBody>
          All our articles can be republished for free, online or in print, under the Creative Commons licence.
        </MessageTileBody>
      </ThemeProvider>
    </div>
  </ComponentOverview>
)
