import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '../Button'

const styles = theme => ({
  button: {
    marginBottom: theme.spacing(1)
  }
})

export const MessageTileButton = ({ children, classes, ...props }) => {
  return (
    <Button className={classes.button} colour='primary' {...props}>
      {children}
    </Button>
  )
}

MessageTileButton.propTypes = {

  /**
   * The Button text
   */
  children: PropTypes.node.isRequired,
  /**
   *
   */
  classes: PropTypes.object
}

MessageTileButton.defaultProps = {
  fullWidth: true,
  prominent: false
}

export default withStyles(styles)(MessageTileButton)
