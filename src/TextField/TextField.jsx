import MaterialTextField from '@material-ui/core/TextField'
import React from 'react'

/**
 * The TextField component basically re-exports the Material TextField
 * component, with a few tweaks.
 */
const TextField = ({ ...other }) => (
  <MaterialTextField {...other} />
)

export default TextField
