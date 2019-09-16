import Button from '../Button'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import corePalette from '../styles/palettes/core'
import neutralPalette from '../styles/palettes/neutral'

const styles = theme => ({
  button: {
    borderRadius: 0,
    justifyContent: 'left',
    backgroundColor: corePalette[600],

    // We need to mark the colour with `!important` to avoid global hyperlink
    // styles overriding this value.
    color: [neutralPalette[0], '!important'],

    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: corePalette[600]
    },
    padding: '9px 12px' // special case, needs to match padding on existing topbar
  },
  icon: {
    position: 'absolute',
    right: theme.spacing(1)
  }
})

/**
 * The `<ThinDonationBanner>` component is a clickable block that can
 * contain a short amount of text.
 *
 * Intended for use on mobile as an alternative to `<DonationBanner>`
 *
 * ~~~js
 * <ThinDonationBanner>
 *   Some nice text
 * </ThinDonationBanner>
 * ~~~
 *
 */
export const ThinDonationBanner = ({ children, classes, onClick }) => {
  return (
    <Button fullWidth className={classes.button} onClick={onClick}>
      {children}
      <ArrowRightIcon className={classes.icon} />
    </Button>
  )
}

ThinDonationBanner.propTypes = {
  /**
   * Any sub-components you want to render.
   */
  children: PropTypes.node.isRequired,

  /**
   * The callback called when button is clicked.
   */
  onClick: PropTypes.func
}

export default withStyles(styles)(ThinDonationBanner)
