import MaterialButton from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'

/** The `<Button>` component represents a clickable button. */
const Button = ({ children, colour, ...other }) => (
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

  /** If `true`, the button will be disabled. */
  disabled: PropTypes.bool,

  /** The callback function called when the button is clicked. */
  onClick: PropTypes.func,

  /** The size of the button. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** The variant of the button. */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
}

Button.defaultProps = {
  colour: 'default',
  disabled: false,
  size: 'medium',
  variant: 'contained'
}

export default Button
