import PropTypes from 'prop-types'
import React from 'react'
import Popover from '@material-ui/core/Popover'

/**
 * The `<SelectMenu>` component allows rendering a collection of `SelectMenuItem`s.
 * This component uses MUI's `Popover`, accepting all of its props.
 *
 * ```js
 * import { SelectMenu, SelectMenuItem } from '@theconversation/ui'
 *
 * <SelectMenu>
 *   <SelectMenuItem onClick={() => select('Red')}>Red</option>
 *   <SelectMenuItem onClick={() => select('Green')} selected>Green</option>
 *   <SelectMenuItem onClick={() => select('Blue')}>Blue</option>
 * </SelectMenu>
 * ```
 */
export default function SelectMenu ({
  anchorEl,
  children,
  open,
  onClose,
  ...other
}) {
  return (
    <Popover
      anchorEl={anchorEl}
      onClose={onClose}
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      transformOrigin={{
        horizontal: 'left',
        vertical: -5
      }}
      {...other}
    >
      {children}
    </Popover>
  )
}

SelectMenu.defaultProps = {
  anchorEl: undefined
}

SelectMenu.propTypes = {
  /**
   * A HTML element, or a function that returns it. It's used to set the position of the popover.
   */
  anchorEl: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: PropTypes.func.isRequired,

  /**
   * If `true`, the menu will be visible.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Required. Items of the select menu.
   */
  children: PropTypes.node.isRequired
}
