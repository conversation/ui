import { storiesOf } from '@storybook/react'
import messageTile from './messageTile'
import examples from './examples'
import messageTileHeader from './messageTileHeader'
import messageTileBody from './messageTileBody'
import messageTileButton from './messageTileButton'

storiesOf('MessageTile', module)
  .add('Overview', messageTile)
  .add('Examples', examples)
  .add('MessageTileHeader', messageTileHeader)
  .add('MessageTileBody', messageTileBody)
  .add('MessageTileButton', messageTileButton)
