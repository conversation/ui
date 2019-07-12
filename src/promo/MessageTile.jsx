import PropTypes from 'prop-types'
import React from 'react'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '../Button'
import Typography from '../Typography'
import neutralPalette from '../styles/palettes/neutral'

const styles = theme => ({
  body: {
    marginBottom: 16
  },
  box: {
    borderRadius: 4,
    marginBottom: 16,
    padding: 16
  },
  title: {
    marginBottom: 8
  }
})

export const MessageTile = ({ body, buttonText, classes, onClick, title }) => {
  return (
    <Box className={classes.box} bgcolor={neutralPalette[40]} color={neutralPalette[700]}>
      { title ? (
        <Typography className={classes.title} variant='h6'>
          {title}
        </Typography>
      ) : null }

      { body ? (
        <Typography className={classes.body} variant='body2'>
          {body}
        </Typography>
      ) : null }

      { buttonText ? (
        <Button fullWidth colour='primary' onClick={onClick}>
          {buttonText}
        </Button>
      ) : null }
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
