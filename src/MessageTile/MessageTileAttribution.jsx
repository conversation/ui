import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  attribution: {
    marginTop: theme.spacing(2)
  }
})

export const MessageTileAttribution = ({ children, classes }) => {
  return (
    <div className={classes.attribution} key='attribution'>
      {children}
    </div>
  )
}

MessageTileAttribution.defaultTypes = {
  children: {}
}

MessageTileAttribution.propTypes = {
  /**
   * The nested components that go in the body
   */
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(MessageTileAttribution)
