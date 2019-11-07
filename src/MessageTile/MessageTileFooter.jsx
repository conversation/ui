import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  footer: {
    marginBottom: theme.spacing(1)
  }
})

export const MessageTileFooter = ({ children, classes }) => {
  return (
    <div className={classes.footer} key='footer'>
      {children}
    </div>
  )
}

MessageTileFooter.defaultTypes = {
  children: {}
}

MessageTileFooter.propTypes = {
  /**
   * The nested components that go in the body
   */
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(MessageTileFooter)
