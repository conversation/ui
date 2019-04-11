import React from 'react'
import PropTypes from 'prop-types'
import MaterialAvatar from '@material-ui/core/Avatar'
import withStyles from '@material-ui/core/styles/withStyles'
import defaultImage from './default.jpg'

const DEFAULT_AVATAR_SIZE = 68

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    border: `solid 1px ${theme.palette.grey[300]}`
  }
})

/**
 * A circle avatar with a light border.
 *
 * ```js
 * import { Avatar } from '@theconversation/ui'
 *
 * <Avatar src={YOUR_URL} />
 * ```
 */
export const Avatar = ({ src, size, classes, ...other }) => {
  return (
    <MaterialAvatar {...other} src={src} classes={classes} style={{ width: size, height: size }} />
  )
}

Avatar.propTypes = {
  /**
   * URL to the image
   */
  src: PropTypes.string,

  /**
   * The size of the button, limited to select sizes.
   */
  size: PropTypes.oneOf([48, DEFAULT_AVATAR_SIZE])
}

Avatar.defaultProps = {
  src: defaultImage,
  size: DEFAULT_AVATAR_SIZE
}

export default withStyles(styles)(Avatar)
