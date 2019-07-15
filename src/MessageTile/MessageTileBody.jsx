import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '../Typography'

const styles = theme => ({
  body: {
    marginBottom: theme.spacing(2)
  }
})

export const MessageTileBody = ({ children, classes }) => {
  return (
    <Typography className={classes.body} variant='body2'>
      {children}
    </Typography>
  )
}

MessageTileBody.defaultTypes = {
  children: {}
}

MessageTileBody.propTypes = {
  /**
   * The nested components that go in the body
   */
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(MessageTileBody)
