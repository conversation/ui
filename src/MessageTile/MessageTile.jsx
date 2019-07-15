import PropTypes from 'prop-types'
import React from 'react'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/core/styles/withStyles'

import neutralPalette from '../styles/palettes/neutral'

const styles = theme => ({
  box: {
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  }
})

export const MessageTile = ({ children, classes }) => {
  return (
    <Box className={classes.box} bgcolor={neutralPalette[40]} color={neutralPalette[700]}>
      { children }
    </Box>
  )
}

MessageTile.defaultProps = {
  body: '',
  buttonText: '',
  onClick: () => {},
  title: ''
}

MessageTile.propTypes = {
  /**
   * The body text. If not provided, it's not shown.
   */
  body: PropTypes.string,
  /**
   * The buttonText text. If not provided, the button is not shown.
   */
  buttonText: PropTypes.string,
  /**
   * The callback called when button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * The title text. If not provided, it's not shown.
   */
  title: PropTypes.string
}

export default withStyles(styles)(MessageTile)
