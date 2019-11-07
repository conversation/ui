import PropTypes from 'prop-types'
import React from 'react'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/core/styles/withStyles'

import neutralPalette from '../styles/palettes/neutral'

const styles = theme => ({
  box: {
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
})

/**
 * The `<MessageTile>` component is used to wrap three sub-components
 * to show a tile, intended for promos, with a header, a body and a
 * call-to-action button at the bottom.
 *
 * ```js
 * import { MessageTile, MessageTileHeader, MessageTileBody, MessageTileButton } from '@theconversation/ui'
 *
 * <MessageTile>
 *  <MessageTileHeader>
 *    <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={by} />
 *    <img style={{ width: 26, marginRight: 6, marginBottom: 8 }} src={cc} />
 *    <img style={{ width: 26, marginBottom: 8 }} src={nd} />
 *    <div>We believe in the free flow of information.</div>
 *  </MessageTileHeader>
 *
 *  <MessageTileBody>
 *    All our articles can be republished for free, online or in print, under the Creative Commons licence.
 *  </MessageTileBody>

 *  <MessageTileButton onClick={action('clicked')}>
 *    Republish for free
 *  </MessageTileButton>
 *</MessageTile>
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
