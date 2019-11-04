import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '../Typography'

const styles = theme => ({
  title: {
    marginBottom: theme.spacing(1)
  }
})

export const MessageTileHeader = ({ children, classes }) => {
  return (
    <Typography className={classes.title} variant='h5'>
      { children }
    </Typography>
  )
}

MessageTileHeader.defaultTypes = {
  children: {}
}

MessageTileHeader.propTypes = {
  /**
   * The nested components that go in the header
   */
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(MessageTileHeader)
