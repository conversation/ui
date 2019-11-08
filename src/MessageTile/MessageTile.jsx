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

/**
 * The `<MessageTile>` component is used to wrap three sub-components
 * to show a tile, intended for promos, with a header, a body and a
 * call-to-action button at the bottom.
 *
 * ```js
 * import {
 *   MessageTile,
 *   MessageTileHeader,
 *   MessageTileBody,
 *   MessageTileButton,
 *   MessageTileFooter,
 *   Avatar,
 *   Person,
 *   Typography
 * } from '@theconversation/ui'
 *
 * <MessageTile>
 *   <MessageTileHeader>
 *     Before you go...
 *   </MessageTileHeader>
 *
 *   <MessageTileBody>
 *     <Typography variant='body1' paragraph>
 *       It is easier than ever before for vested interests to spread
 *       disinformation on vital matters of public interest. If you want
 *       to know what's really going you need to hear from the experts
 *       willing to drill down to the truth. But we can't do that vital
 *       work unless readers donate. Please make a donation.
 *     </Typography>
 *   </MessageTileBody>
 *
 *   <MessageTileButton fullWidth={false} prominent onClick={action('clicked')}>
 *     Donate now
 *   </MessageTileButton>
 *
 *    <MessageTileFooter>
 *      <Typography gutterBottom>
 *        <Person name='Misha Ketchell' caption='Editor' />
 *      </Typography>
 *      <Avatar size={48} src='https://cdn.theconversation.com/avatars/13/width238/image-20181205-186070-f58pk2.jpg' />
 *    </MessageTileFooter>
 *  </MessageTile>
 * ```
 *
 * You can change the internal styling by wrapping the whole thing in a `ThemeProvider`
 * with your chosen theme, e.g.
 *
 * ```js
 * import {
 *   MessageTile,
 *   MessageTileHeader,
 *   MessageTileBody,
 *   MessageTileButton,
 *   ThemeProvider
 * } from '@theconversation/ui'
 *
 *
 * <ThemeProvider theme={coreTheme()}>
 *   <MessageTile>
 *     ...
 *   </MessageTile>
 * </ThemeProvider>
 * ```
 */

export const MessageTile = ({ children, classes }) => {
  return (
    <Box className={classes.box} bgcolor={neutralPalette[40]} color={neutralPalette[700]}>
      { children }
    </Box>
  )
}

MessageTile.defaultTypes = {
  children: {}
}

MessageTile.propTypes = {
  /**
   * The nested components
   */
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(MessageTile)
