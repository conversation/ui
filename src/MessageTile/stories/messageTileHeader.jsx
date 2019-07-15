import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import MessageTileHeader, { MessageTileHeader as UnwrappedMessageTileHeader } from '../MessageTileHeader'

import by from './by.svg'
import cc from './cc.svg'
import nd from './nd.svg'

import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='MessageTileHeader' component={UnwrappedMessageTileHeader}>
    <div style={{ width: 220 }}>
      <ThemeProvider theme={defaultTheme()}>
        <MessageTileHeader>
          <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={by} />
          <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={cc} />
          <img style={{ width: 26, marginBottom: 8 }} src={nd} />
          <div>We believe in the free flow of information.</div>
        </MessageTileHeader>
      </ThemeProvider>
    </div>
  </ComponentOverview>
)
