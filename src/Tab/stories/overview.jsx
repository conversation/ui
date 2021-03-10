import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'

import ComponentOverview from '../../ComponentOverview'
import { Tab } from '../Tab'
import { Grid, Tabs, ThemeSelector, Typography } from '../../index'

function ExampleTabbedNavigation () {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs
          value={selectedTab}
          onChange={(event, value) => setSelectedTab(value)}
        >
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab label='Item Three' />
          <Tab label='Item Four' />
        </Tabs>
      </Grid>
      <Grid xs={12}>
        <Typography hidden={selectedTab !== 0} variant='body2'>Item One</Typography>
        <Typography hidden={selectedTab !== 1} variant='body2'>Item Two</Typography>
        <Typography hidden={selectedTab !== 2} variant='body2'>Item Three</Typography>
        <Typography hidden={selectedTab !== 3} variant='body2'>Item Four</Typography>
      </Grid>
    </Grid>
  )
}

export default () => {
  return (
    <ThemeSelector theme={select('Theme', ['default', 'core', 'accent'], 'core')}>
      <ComponentOverview component={Tab}>
        <div className='markdown-body'>
          <h2>Example</h2>
        </div>

        <ExampleTabbedNavigation />

        <br />
      </ComponentOverview>
    </ThemeSelector>
  )
}
