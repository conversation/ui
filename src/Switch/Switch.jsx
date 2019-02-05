import MaterialSwitch from '@material-ui/core/Switch'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * The `<Switch>` component allows a user to toggle the state of a setting on
 * or off.
 *
 * ```js
 * import { Switch } from '@theconversation/ui'
 *
 * <Switch onChange={alert('changed')} />
 * ```
 */
const Switch = ({ colour, ...other }) => (
  <MaterialSwitch color={colour} {...other} />
)

Switch.propTypes = {
  /**
   * A boolean value indicating whether the switch is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The colour of the switch.
   */
  colour: PropTypes.oneOf(['default', 'primary', 'secondary']),

  /**
   * A boolean value indicating whether the switch is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * A boolean value indicating whether the ripple effect is enabled.
   */
  disabledRipple: PropTypes.bool,

  /**
   * The callback function called when the switch changes.
   */
  onChange: PropTypes.func,

  /**
   * The value of the component.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
}

Switch.defaultProps = {
  colour: 'default',
  disabled: false
}

export default Switch
