import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@theconversation/ui'

import 'bootstrap/dist/css/bootstrap.css'

const Index = () => (
  <Button>Hello World!</Button>
)


ReactDOM.render(<Index />, document.getElementById('root'))
