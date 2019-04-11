import React from 'react'

import ComponentOverview from '../../ComponentOverview'
import Avatar, { Avatar as UnwrappedAvatar } from '../Avatar'

import image from './dog.png'

export default () => (
  <ComponentOverview component={UnwrappedAvatar}>
    <h3>Default image</h3>
    <Avatar />

    <h3>Set image</h3>
    <Avatar src={image} />
  </ComponentOverview>
)
