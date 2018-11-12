import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import React from 'react'
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
        marginTop: 16
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
const TextField = ({ classes, error, id, label, ...other }) => (
  <FormControl>
    <InputLabel error={error} htmlFor={id} shrink>
      {label}
    </InputLabel>
    <InputBase {...other} classes={classes} error={error} id={id} />
  </FormControl>
)

export default withStyles(styles)(TextField)
