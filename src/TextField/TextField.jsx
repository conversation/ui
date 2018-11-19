import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputBase from '@material-ui/core/InputBase'
import React from 'react'

import FormLabel from './FormLabel'
import { withStyles } from '../index'

const styles = theme => {
  const light = theme.palette.type === 'light';
  const borderColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';

  return {
    root: {
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${borderColor}`,
      borderRadius: 4,
      transition: theme.transitions.create('border-color', {
        duration: theme.transitions.duration.shorter,
      })
    },
    formControl: {
      'label + &': {
        marginTop: 8
      }
    },
    focused: {
      borderColor: theme.palette.primary.main
    },
    error: {
      borderColor: theme.palette.error.main
    },
    input: {
      padding: '10px 12px'
    }
  }
}

/**
 * The TextField component basically re-exports the Material TextField
 * component, with a few tweaks.
 */
const TextField = ({ classes, error, helperText, id, label, required, ...other }) => {
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined

  return (
    <FormControl aria-describedby={helperTextId} error={error}>
      {label && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      <InputBase {...other} classes={classes} id={id} />
      {helperText && (
        <FormHelperText id={helperTextId}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default withStyles(styles)(TextField)
