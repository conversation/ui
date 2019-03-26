import FormLabel from '@material-ui/core/FormLabel'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(12),
    textAlign: 'left'
  }
})

/**
 * Overrides the Material FormLabel component with some custom styles.
 */
export default withStyles(styles)(FormLabel)
