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
    <Typography className={classes.title} variant='h6'>
      { children }
    </Typography>
  )
}

MessageTileHeader.defaultProps = {
  children: []
}

MessageTileHeader.propTypes = {
  /**
   * The contents of the Header. If not provided, it's not shown.
   */
  children: PropTypes.array,
}

export default withStyles(styles)(MessageTileHeader)
