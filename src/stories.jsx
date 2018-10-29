import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Button } from './index'

const TYPES = ['primary', 'success', 'danger', 'link']

storiesOf('Button', module)
  .add('normal', () => (
    <div>
      {TYPES.map(type => <Button color={type} onClick={action(type)}>{type}</Button>)}
    </div>
  ))
  .add('outline', () => (
    <div>
      {TYPES.map(type => <Button color={type} onClick={action(type)} outline>{type}</Button>)}
    </div>
  ))
  .add('size', () => (
    <div>
      <Button onClick={action('large')} size="lg">Large Button</Button>
      <Button onClick={action('small')} size="sm">Small Button</Button>
    </div>
  ))
