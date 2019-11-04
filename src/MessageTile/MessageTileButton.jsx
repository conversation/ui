import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'

export const MessageTileButton = ({ children, classes, ...props }) => {
  return (
    <Button colour='primary' {...props}>
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

export default MessageTileButton
