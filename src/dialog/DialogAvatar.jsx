import React from 'react'
import Avatar from '../Avatar'
import withStyles from '@material-ui/core/styles/withStyles'

const AVATAR_SIZE = 68

const styles = theme => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: AVATAR_SIZE / -2,
    justifyContent: 'center',
    display: 'flex',
    height: 0 // may seem pointless, but required to not block other UI elements
  }
})

/**
 * Allows you to attach an avatar to the top of a dialog.
 */
const DialogAvatar = ({ src, classes }) => {
  return (
    <div className={classes.root}>
      <Avatar src={src} size={AVATAR_SIZE} />
    </div>
  )
}

export default withStyles(styles)(DialogAvatar)
