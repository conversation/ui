import React from 'react'
import { ThemeProvider } from '../../styles'
import Typography from '../../Typography'
import MessageTile from '../MessageTile'
import MessageTileHeader from '../MessageTileHeader'
import MessageTileBody from '../MessageTileBody'
import MessageTileButton from '../MessageTileButton'
import { action } from '@storybook/addon-actions'

import Avatar from '../../Avatar'
import Person from '../../Person'

import by from './by.svg'
import cc from './cc.svg'
import nd from './nd.svg'

import accentTheme from '../../styles/themes/accent'
import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

export default () => (
  <div>
    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Republishing
    </Typography>

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
    </div>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Donations
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
      End of article donation call-to-actions
    </Typography>

    <div style={{ width: 552 }}>
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

          <div key='attribution'>
            <Typography gutterBottom>
              <Person name='Misha Ketchell' caption='Editor' />
            </Typography>
            <Avatar size={48} src='https://cdn.theconversation.com/avatars/13/width238/image-20181205-186070-f58pk2.jpg' />
          </div>
        </MessageTile>
      </ThemeProvider>
    </div>

    <Typography
      style={{ clear: 'both', margin: '20px 0' }}
      variant='h4'
    >
      Newsletter Subscriptions
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
)
