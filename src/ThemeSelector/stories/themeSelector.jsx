import React from 'react'

import ThemeSelector from '../ThemeSelector'
import Button from '../../Button'
import Typography from '../../Typography'

export default () => {
  return (
    <React.Fragment>
      <Typography style={{ clear: 'both' }} variant='h4'>Default theme</Typography>
      <ThemeSelector theme='default'>
        <Button colour='primary'>Default</Button>
        <Button colour='secondary'>Default</Button>
      </ThemeSelector>

      <Typography style={{ clear: 'both' }} variant='h4'>Core theme</Typography>
      <ThemeSelector theme='core'>
        <Button colour='primary'>Core</Button>
        <Button colour='secondary'>Core</Button>
      </ThemeSelector>

      <Typography style={{ clear: 'both' }} variant='h4'>Accent theme</Typography>
      <ThemeSelector theme='accent'>
        <Button colour='primary'>Accent</Button>
        <Button colour='secondary'>Accent</Button>
      </ThemeSelector>

      <Typography style={{ clear: 'both' }} variant='h4'>No value given gets default</Typography>
      <ThemeSelector>
        <Button colour='primary'>Accent</Button>
        <Button colour='secondary'>Accent</Button>
      </ThemeSelector>
    </React.Fragment>
  )
}
