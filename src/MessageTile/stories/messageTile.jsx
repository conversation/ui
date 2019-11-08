import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import { ThemeProvider } from '../../styles'
import MessageTile, { MessageTile as UnwrappedMessageTile } from '../MessageTile'
import MessageTileHeader from '../MessageTileHeader'
import MessageTileBody from '../MessageTileBody'
import MessageTileButton from '../MessageTileButton'
import MessageTileFooter from '../MessageTileFooter'

import coreTheme from '../../styles/themes/core'

import Avatar from '../../Avatar'
import Person from '../../Person'
import Typography from '../../Typography'

import { action } from '@storybook/addon-actions'

export default () => (
  <ComponentOverview heading='MessageTile' component={UnwrappedMessageTile}>
    <div style={{ marginTop: 16, width: 552 }}>
      <ThemeProvider theme={coreTheme()}>
        <MessageTile>
          <MessageTileHeader>
            Before you go...
          </MessageTileHeader>

          <MessageTileBody>
            <Typography variant='body1' paragraph>
              It is easier than ever before for vested interests to spread
              disinformation on vital matters of public interest. If you want
              to know what's really going you need to hear from the experts
              willing to drill down to the truth. But we can't do that vital
              work unless readers donate. Please make a donation.
            </Typography>
          </MessageTileBody>

          <MessageTileButton fullWidth={false} prominent onClick={action('clicked')}>
            Donate now
          </MessageTileButton>

          <MessageTileFooter>
            <Typography gutterBottom>
              <Person name='Misha Ketchell' caption='Editor' />
            </Typography>
            <Avatar size={48} src='https://cdn.theconversation.com/avatars/13/width238/image-20181205-186070-f58pk2.jpg' />
          </MessageTileFooter>
        </MessageTile>
      </ThemeProvider>
    </div>
  </ComponentOverview>
)
