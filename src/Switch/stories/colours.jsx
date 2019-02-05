import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Switch } from '../../index'
import { GridLayout } from '../../util'

const COLOURS = ['default', 'primary', 'secondary']

const md = `
# Colours

The \`<Switch>\` component has three different colours:

* \`default\`: A switch with no visual emphasis, it should be used for
  everything else.
* \`primary\`: A switch with the highest visual emphasis, it should be used for
  primary actions.
* \`secondary\`: A switch with an alternate visual emphasis, it should be used
  for auxilary actions.

You can set the colour of a switch using the \`colour\` prop: 

~~~js
<Switch colour='primary' />
~~~

## Example

<!-- STORY -->
`

class ExampleSwitch extends React.Component {
  state = {
    checked: true
  }

  toggleSwitch = (event) => {
    action('toggled')(event)
    this.setState({ checked: !this.state.checked })
  }

  render () {
    return (
      <Switch {...this.props} onChange={this.toggleSwitch} checked={this.state.checked} />
    )
  }
}

export default withDocs(md, () =>
  <GridLayout>
    {COLOURS.map(colour =>
      <ExampleSwitch key={colour} colour={colour} />
    )}
  </GridLayout>
)
