import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputBase from '@material-ui/core/InputBase'
import React from 'react'
import Select from '@material-ui/core/Select'

import FormLabel from '../TextField/FormLabel'
import { withStyles } from '../index'

const styles = theme => {
  const light = theme.palette.type === 'light'
  const borderColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)'

  return {
    root: {
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${borderColor}`,
      borderRadius: 4,
      transition: theme.transitions.create('border-color', {
        duration: theme.transitions.duration.shorter
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
      padding: '10px 32px 10px 12px'
    }
  }
}

/**
 * The Dropdown component provides a dropdown menu which displays a list of
 * items to the user.
 */
const Dropdown = ({
  children,
  classes,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  label,
  required,
  theme,
  ...other
}) => {
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined
  const InputElement = <InputBase classes={classes} id={id} />

  return (
    <FormControl aria-describedby={helperTextId} disabled={disabled} error={error} fullWidth={fullWidth}>
      {label && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      <Select
        {...other}
        input={InputElement}
        MenuProps={{
          transitionDuration: theme.transitions.duration.shortest // The 'auto' value is too slow.
        }}
      >
        {children}
      </Select>
      {helperText && (
        <FormHelperText id={helperTextId}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default withStyles(styles, { withTheme: true })(Dropdown)
