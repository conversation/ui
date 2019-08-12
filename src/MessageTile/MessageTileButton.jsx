import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '../Button'

const styles = theme => ({
  button: {
    marginBottom: theme.spacing(1)
  }
})

export const MessageTileButton = ({ children, classes, onClick }) => {
  return (
    <Button fullWidth className={classes.button} colour='primary' onClick={onClick}>
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
  onClick: PropTypes.func
}

export default withStyles(styles)(MessageTileButton)
