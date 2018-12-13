import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputBase from '@material-ui/core/InputBase'
import PropTypes from 'prop-types'
import React from 'react'
import Select from '@material-ui/core/Select'
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
    input: {
      padding: '10px 32px 10px 12px'
    }
  }
}

/**
 * The `<Dropdown>` component allows users to select from a list of items.
 *
 * ```js
  * import { MenuItem, Dropdown } from '@theconversation/ui'
  *
 * <Dropdown
 *   helperText='Select a colour'
 *   label='Colour'
 *   onChange={alert('change')}
 * >
 *   <MenuItem value='red'>Red</MenuItem>
 *   <MenuItem value='green'>Green</MenuItem>
 *   <MenuItem value='blue'>Blue</MenuItem>
 * </Dropdown>
 * ```
 */
export const Dropdown = ({
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
          // Allow the popover to appear above the Select component, even if
          // it's close to the margin.
          marginThreshold: 0,

          // The 'auto' value is too slow.
          transitionDuration: theme.transitions.duration.shortest
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

Dropdown.propTypes = {
  /**
   * The content of the dropdown.
   */
  children: PropTypes.node.isRequired,

  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * A boolean value indicating whether the dropdown is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * A boolean value indicating whether the dropdown is in an error state.
   */
  error: PropTypes.bool,

  /**
   * A boolean value indicating whether the dropdown should take up the full
   * width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The text displayed below the dropdown.
   */
  helperText: PropTypes.string,

  /**
   * The `id` of the underlying `<input>` element.
   */
  id: PropTypes.string,

  /**
   * The text displayed above the dropdown.
   */
  label: PropTypes.string,

  /**
   * The callback function called when the dropdown value changes.
   */
  onChange: PropTypes.func,

  /**
   * A boolean value indicating whether the dropdown is required to be filled
   * by the user.
   */
  required: PropTypes.bool,

  /**
   * The value of the dropdown.
   */
  value: PropTypes.string
}

Dropdown.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  required: false
}

export default withStyles(styles, { withTheme: true })(Dropdown)
