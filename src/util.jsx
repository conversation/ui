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

export const propDefinitions = component =>
  Object
    .keys(component.__docgenInfo.props)
    .sort()
    .reduce((result, property) => {
      const prop = component.__docgenInfo.props[property]
      result.push({
        property,
        propType: prop.flowType || prop.type,
        defaultValue: prop.defaultValue && prop.defaultValue.value,
        description: prop.description,
        required: prop.required
      })
      return result
    }, [])
