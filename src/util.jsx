import React from 'react'
import Grid from '@material-ui/core/Grid'
import get from 'lodash/get'

const SPACING = 2

/**
 * The `<GridLayout>` component automatically renders its children in a grid
 * layout.
 */
export const GridLayout = ({ children, ...other }) => {
  children = Array.isArray(children) ? children : [children]

  return (
    <Grid container {...other} justify='center' spacing={SPACING}>
      {children.map((child, index) =>
        <Grid item key={index}>{child}</Grid>
      )}
    </Grid>
  )
}

/**
 * Returns an array of prop definitions, based on the docgen info for the given
 * component.
 */
export const propDefinitions = component =>
  Object
    .keys(get(component, '__docgenInfo.props', []))
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
