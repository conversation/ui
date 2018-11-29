import React from 'react'
import { Grid } from './index'

const SPACING = 16

export const grid = as => () => (
  <Grid container justify='center' spacing={SPACING}>
    {Array.isArray(as) ? as.map(a => a()) : as()}
  </Grid>
)

export const item = as => () => (
  <Grid item>
    {as()}
  </Grid>
)
