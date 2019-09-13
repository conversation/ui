import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '../Button'

const styles = theme => ({
  button: {
    marginBottom: theme.spacing(1)
  }
})

export const MessageTileButton = ({ children, fullWidth, prominent, classes, onClick }) => {
  return (
    <Button fullWidth={fullWidth} prominent={prominent} className={classes.button} colour='primary' onClick={onClick}>
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
   * The onClick event for the Button
   */
  onClick: PropTypes.func,
  /**
   * If the button should run full width
   */
  fullWidth: PropTypes.bool,
  /**
   * If the button should be a little wider, having extra padding left and right
   */
  prominent: PropTypes.bool
}

MessageTileButton.defaultProps = {
  fullWidth: true,
  prominent: false
}

export default withStyles(styles)(MessageTileButton)
