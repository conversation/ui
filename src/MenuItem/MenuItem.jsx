import MaterialMenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * The `<MenuItem>` component functionally replaces what would be `option`
 * elements in a `select` field.
 #
 * MenuItems are passed to `Dropdown` components as children.
 *
 * ```js
 * import { Dropdown, MenuItem } from '@theconversation/ui'
 *
 * <Dropdown
 *   label="Country"
 *   value="AU"
 * >
 *   <MenuItem key="1" value="AU">Australia</MenuItem>
 *   <MenuItem key="2" value="UK">United Kingdom</MenuItem>
 *   <MenuItem key="3" value="US">United States</MenuItem>
 * </Dropdown>
 * ```
 */
export const MenuItem = ({ children, ...other }) => (
  <MaterialMenuItem {...other}>
    {children}
  </MaterialMenuItem>
)

MenuItem.propTypes = {
  /**
   * MenuItem contents.
   */
  children: PropTypes.node.isRequired,

  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component: PropTypes.component,

  /**
   * If `true`, the left and right padding is removed
   */
  disableGutters: PropTypes.bool
}

MenuItem.defaultProps = {
  disableGutters: false,
  component: 'li'
}

export default MenuItem
