import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputBase from '@material-ui/core/InputBase'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import isBoolean from 'lodash/isBoolean'
import withStyles from '@material-ui/core/styles/withStyles'

import FormLabel from '../form/FormLabel'
import { Grid } from '../index'

const styles = theme => {
  const light = theme.palette.type === 'light'
  const borderColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)'

  return {
    root: {
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${borderColor}`,
      borderRadius: 4,
      overflow: 'hidden',
      transition: theme.transitions.create('border-color', {
        duration: theme.transitions.duration.shorter
      })
    },
    formControl: {
      'label + &': {
        marginTop: 8
      },
      '& + .MuiFormHelperText-root': {
        lineHeight: '1.5'
      }
    },
    focused: {
      borderColor: theme.palette.primary.main
    },
    error: {
      borderColor: theme.palette.error.border
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
  autoComplete,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  label,
  required,
  maxLength,
  ...other
}) => {
  const [errorState, setErrorState] = useState(error)
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined

  // Max length validation with character count
  const [characterCount, setCharacterCount] = useState(0)
  const hasLengthValidation = maxLength > 0
  const maxValidationHelperText = `${characterCount}/${maxLength}`
  const showHelperText = helperText || hasLengthValidation

  useEffect(() => {
    if (hasLengthValidation) {
      const { value: valueProp, defaultValue: defaultValueProp } = other
      const inputValue = valueProp || defaultValueProp

      if (inputValue) { setCharacterCount(inputValue.length) }
    }
  }, [])

  const onChange = (event) => {
    // Call the `other.onChange` prop function, if any
    if (other.onChange) { other.onChange(event) }

    if (hasLengthValidation) {
      // We don't want to miscount controlled inputs
      const { value: valueProp } = other

      if (valueProp) {
        setCharacterCount(valueProp.length)
        return
      }

      const currentCharacterCount = event.target.value.length

      setCharacterCount(currentCharacterCount)
      setErrorState(currentCharacterCount > maxLength)
    }
  }

  // Sugar for setting autoComplete using a boolean value.
  if (isBoolean(autoComplete)) {
    autoComplete = autoComplete ? 'on' : 'off'
  }

  return (
    <FormControl aria-describedby={helperTextId} disabled={disabled} error={errorState} fullWidth={fullWidth}>
      {label && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}

      <InputBase {...other} autoComplete={autoComplete} id={id} onChange={onChange} />

      {showHelperText && (
        <FormHelperText id={helperTextId}>
          <Grid component='span' justify='space-between' container spacing={2}>
            <Grid component='span' item xs>{helperText}</Grid>
            {hasLengthValidation && (
              <Grid component='span' item xs style={{ textAlign: 'right' }}>
                {maxValidationHelperText}
              </Grid>
            )}
          </Grid>
        </FormHelperText>
      )}
    </FormControl>
  )
}

TextField.propTypes = {
  /**
   * The `autoComplete` value of the underlying `<input>` element. It can be
   * specified as either a boolean or string value.
   */
  autoComplete: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

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
   * The callback function called when the text field loses focus.
   */
  onBlur: PropTypes.func,

  /**
   * The callback function called when the text field gains focus.
   */
  onFocus: PropTypes.func,

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
   * The maximum number of characters allowed in the text field before it's marked as invalid.
   * Defaults to 0.
   *
   * Any value above 0 will add a character counter to the text field helper text
   */
  maxLength: PropTypes.number,

  /**
   * The type of the text field.
   */
  type: PropTypes.oneOf(['email', 'text', 'password', 'number']),

  /**
   * The value of the text field.
   */
  value: PropTypes.string
}

TextField.defaultProps = {
  autoComplete: false,
  disabled: false,
  error: false,
  fullWidth: false,
  maxLength: 0,
  required: false,
  type: 'text'
}

export default withStyles(styles)(TextField)
