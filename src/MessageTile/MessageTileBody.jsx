import PropTypes from 'prop-types'
import React from 'react'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/core/styles/withStyles'

import Typography from '../Typography'

const styles = theme => ({
  body: {
    marginBottom: theme.spacing(2)
  },
})

export const MessageTileBody = ({ children, classes }) => {
  return (
    <Typography className={classes.body} variant='body2'>
      {children}
    </Typography>
  )
}

MessageTileBody.defaultProps = {
  children: []
}

MessageTileBody.propTypes = {
  /**
   * The contents of the Body. If not provided, it's not shown.
   */
  children: PropTypes.array,
}

export default withStyles(styles)(MessageTileBody)
