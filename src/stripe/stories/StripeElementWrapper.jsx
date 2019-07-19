import ComponentOverview from '../../ComponentOverview'
import React from 'react'
import StripeElementWrapper from '../StripeElementWrapper'
import { Input } from '@material-ui/core'
import { action } from '@storybook/addon-actions'

export default () => (
  <ComponentOverview heading='StripeElementWrapper' component={StripeElementWrapper}>
    <div className='markdown-body'>
      <h2>Example</h2>
    </div>

    <StripeElementWrapper
      component={Input}
      label='Credit Card'
      onBlur={action('Blur')}
      onChange={action('Change')}
      onFocus={action('Focus')}
    />
  </ComponentOverview>
)
