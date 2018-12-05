import MaterialButton from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'

/**
  * The `<Button>` component allows users to take actions, by tapping or
  * clicking a button.
  *
  * ```js
  * import { Button } from '@theconversation/ui'
  *
  * <Button onClick={alert("click")}>
  *   Click Me!
  * </Button>
  * ```
  */
export const Button = ({ children, colour, ...other }) => (
  <MaterialButton color={colour} {...other}>
    {children}
  </MaterialButton>
)

Button.propTypes = {
  /**
   * The colour of the button.
   *
   * The `primary` buttons (e.g. save, yes, etc.) should have a higher visual
   * empasis, while `secondary` buttons (e.g. delete, etc.) are given a
   * different emphasis to indicate to the user that they perform an auxilary
   * action.
   */
  colour: PropTypes.oneOf(['default', 'primary', 'secondary']),

  /**
   * A boolean value indicating whether the button is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * A boolean value indicating whether the button should take up the full
   * width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The callback function called when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The variant of the button.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
}

Button.defaultProps = {
  colour: 'default',
  disabled: false,
  fullWidth: false,
  size: 'medium',
  variant: 'contained'
}

export default Button
