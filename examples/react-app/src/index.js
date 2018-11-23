import 'typeface-libre-baskerville'
import 'typeface-montserrat'
import 'typeface-noto-sans'

import React from 'react'
import ReactDOM from 'react-dom'
import { Button, ThemeProvider } from '@theconversation/ui'

const Index = () => (
  <ThemeProvider>
    <Button colour='primary' variant='contained'>Hello World!</Button>
  </ThemeProvider>
)

ReactDOM.render(<Index />, document.getElementById('root'))
