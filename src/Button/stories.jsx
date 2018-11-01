import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Button } from './index'

const SOLID_COLOURS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'link']
const OUTLINE_COLOURS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

storiesOf('Buttons', module)
  .add('solid', () => (
    <div>
      {SOLID_COLOURS.map(colour =>
        <Button colour={colour} onClick={action(colour)}>{colour}</Button>
      )}
    </div>
  ))
  .add('outline', () => (
    <div>
      {OUTLINE_COLOURS.map(colour =>
        <Button colour={colour} onClick={action(colour)} outline>{colour}</Button>
      )}
    </div>
  ))
  .add('size', () => (
    <div>
      <Button colour="primary" onClick={action('large')} size="large">Large Button</Button>
      <Button colour="primary" onClick={action('small')} size="small">Small Button</Button>
    </div>
  ))
