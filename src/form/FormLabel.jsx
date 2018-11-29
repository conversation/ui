import FormLabel from '@material-ui/core/FormLabel'

import { withStyles } from '../index'

const styles = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(14),
    textAlign: 'left'
  }
})

/**
 * Overrides the Material FormLabel component with some custom styles.
 */
export default withStyles(styles)(FormLabel)
