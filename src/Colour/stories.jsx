import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

const TEXT_COLOURS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'body']
const BACKGROUND_COLOURS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

storiesOf('Colours', module)
  .add('text', () => (
    <div>
      {TEXT_COLOURS.map(colour => <p className={ 'text-' + colour }>{colour}</p>)}
    </div>
  ))
  .add('background', () => (
    <div>
      {BACKGROUND_COLOURS.map(colour => <div className={ 'bg-' + colour }>{colour}</div>)}
    </div>
  ))
