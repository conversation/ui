import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import Typography from '../../Typography'
import Avatar from '../../Avatar'
import Person from '../../Person'
import MessageTileFooter, { MessageTileFooter as UnwrappedMessageTileFooter } from '../MessageTileFooter'

import defaultTheme from '../../styles/themes/default'

export default () => (
  <ComponentOverview heading='MessageTileFooter' component={UnwrappedMessageTileFooter}>
    <div style={{ width: 220 }}>
      <ThemeProvider theme={defaultTheme()}>
        <MessageTileFooter>
          <Typography gutterBottom>
            <Person name='Misha Ketchell' caption='Editor' />
          </Typography>
          <Avatar size={48} src='https://cdn.theconversation.com/avatars/13/width238/image-20181205-186070-f58pk2.jpg' />
        </MessageTileFooter>
      </ThemeProvider>
    </div>
  </ComponentOverview>
)
