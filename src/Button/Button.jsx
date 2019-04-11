import MaterialButton from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    boxShadow: "none",
    "&:active": {
      boxShadow: "none",
    }
  }
})

/**
  * The `<Button>` component allows users to take actions, by tapping or
  * clicking a button.
  *
  * ```js
  * import { Button } from '@theconversation/ui'
  *
  * <Button onClick={alert('click')}>
  *   Click Me!
  * </Button>
  * ```
  */
const Button = ({ children, colour, ...other }) => (
  <MaterialButton color={colour} {...other}>
    {children}
  </MaterialButton>
)

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,

  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The colour of the button.
   *
   * The `primary` buttons (e.g. save, yes, etc.) should have a higher visual
   * emphasis, while `secondary` buttons (e.g. delete, etc.) are given a
   * different emphasis to indicate to the user that they perform an auxiliary
   * action.
   */
  colour: PropTypes.oneOf(['default', 'primary', 'secondary']),

  /**
   * The component used for the root node. Either a string to use a DOM element
or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

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
   * The URL to link to when the button is clicked. If defined, an `<a>`
   * element will be used as the root node.
   */
  href: PropTypes.string,

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

export default withStyles(styles)(Button)
