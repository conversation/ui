import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputBase from '@material-ui/core/InputBase'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import FormLabel from '../form/FormLabel'

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
    success: {
      borderColor: theme.palette.success.main
    },
    input: {
      padding: '10px 12px'
    }
  }
}

/**
 * The `<TextField>` component allows users to enter and edit text.
 *
 * ```js
  * import { TextField } from '@theconversation/ui'
  *
 * <TextField
 *   helperText='Enter your full name'
 *   label='Name'
 *   onChange={alert('change')}
 *   placeholder='Jane Doe'
 * />
 * ```
 */
export const TextField = ({
  classes,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  label,
  required,
  success,
  ...other
}) => {
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined
  const className = classnames({ [classes.success]: success })

  return (
    <FormControl aria-describedby={helperTextId} disabled={disabled} error={error} fullWidth={fullWidth}>
      {label && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      <InputBase {...other} classes={classes} className={className} id={id} />
      {helperText && (
        <FormHelperText id={helperTextId}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

TextField.propTypes = {
  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * A boolean value indicating whether the text field is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * A boolean value indicating whether the text field is in an error state.
   */
  error: PropTypes.bool,

  /**
   * A boolean value indicating whether the text field should take up the full
   * width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The text displayed below the text field.
   */
  helperText: PropTypes.string,

  /**
   * The `id` of the underlying `<input>` element.
   */
  id: PropTypes.string,

  /**
   * The text displayed above the text field.
   */
  label: PropTypes.string,

  /**
   * The callback function called when the text field value changes.
   */
  onChange: PropTypes.func,

  /**
   * The text displayed inside text field before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * A boolean value indicating whether the text field is required to be filled
   * by the user.
   */
  required: PropTypes.bool,

  /**
   * A boolean value indicating whether the text field has the success border colour.
   */
  success: PropTypes.bool,

  /**
   * The type of the text field.
   */
  type: PropTypes.oneOf(['text', 'password']),

  /**
   * The value of the text field.
   */
  value: PropTypes.string
}

TextField.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  required: false,
  success: false,
  type: 'text'
}

export default withStyles(styles)(TextField)
