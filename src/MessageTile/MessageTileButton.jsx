import PropTypes from 'prop-types'
import React from 'react'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '../Button'

const styles = theme => ({
  title: {
    marginBottom: theme.spacing(1)
  }
})

export const MessageTileButton = ({ children, classes, onClick }) => {
  return (
    <Button fullWidth colour='primary' onClick={onClick}>
      {children}
    </Button>
  )
}

MessageTileButton.defaultProps = {
  children: []
}

MessageTileButton.propTypes = {
  /**
   * The contents of the Header. If not provided, it's not shown.
   */
  children: PropTypes.array,
}

export default withStyles(styles)(MessageTileButton)
