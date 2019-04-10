import React from 'react'
import MaterialDivider from '@material-ui/core/Divider'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 2}px auto`,
    width: '21px',
    backgroundColor: theme.palette.primary.contrastText
  }
})

/**
 * A small divider that can be used to split up text or other components.
 *
 * ```js
 * import { MiniDivider } from '@theconversation/ui'
 *
 * <MiniDivider />
 * ```
 */
export const MiniDivider = ({ classes }) => (
  <MaterialDivider classes={classes} />
)

export default withStyles(styles)(MiniDivider)
