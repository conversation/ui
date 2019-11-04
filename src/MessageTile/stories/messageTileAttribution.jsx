import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import Typography from '../../Typography'
import Avatar from '../../Avatar'
import Person from '../../Person'
import MessageTileAttribution, { MessageTileAttribution as UnwrappedMessageTileAttribution } from '../MessageTileAttribution'

import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='MessageTileAttribution' component={UnwrappedMessageTileAttribution}>
    <div style={{ width: 220 }}>
      <ThemeProvider theme={defaultTheme()}>
        <MessageTileAttribution>
          <Typography gutterBottom>
            <Person name='Misha Ketchell' caption='Editor' />
          </Typography>
          <Avatar size={48} src='https://cdn.theconversation.com/avatars/13/width238/image-20181205-186070-f58pk2.jpg' />
        </MessageTileAttribution>
      </ThemeProvider>
    </div>
  </ComponentOverview>
)
