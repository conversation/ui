import React from 'react'
import { storiesOf } from '@storybook/react'

import Overview from '../../Overview'
import colours from './colours'
import sizes from './sizes'
import variants from './variants'
import { Button } from '../../index'

storiesOf('Buttons', module)
  .add('Overview', () => <Overview component={Button} />)
  .add('Colours', colours)
  .add('Sizes', sizes)
  .add('Variants', variants)
