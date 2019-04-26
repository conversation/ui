import React from 'react'
import PropTypes from 'prop-types'
import Link from '@material-ui/core/Link'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  link: {
    // TODO: this is temporary while we work out what to do about
    // themes and palettes properly
    backgroundColor: theme.palette.core && theme.palette.core.main,
    padding: '9px 12px', // special case, needs to match padding on existing topbar
    fontWeight: 'bold', // TODO: we don't want to be making a habit of this
    // We need to mark the colour with `!important` to avoid global hyperlink
    // styles overriding this value.
    color: [theme.palette.primary.contrastText, '!important']
  },
  icon: {
    position: 'absolute',
    right: theme.spacing.unit * 2
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
export const ThinDonationBanner = ({ children, classes, donateText, onClick }) => {
  return (
    <Link block variant='button' underline='none' className={classes.link} onClick={onClick}>
      {children}
      <ArrowRightIcon className={classes.icon} />
    </Link>
  )
}

ThinDonationBanner.propTypes = {
  /**
   * Any sub-components you want to render.
   */
  children: PropTypes.node.isRequired,

  /**
   * Text that appears in the donate button.
   */
  donateText: PropTypes.string,

  /**
   * The callback called when button is clicked.
   */
  onClick: PropTypes.func
}

ThinDonationBanner.defaultProps = {
  donateText: 'Donate now'
}

export default withStyles(styles)(ThinDonationBanner)
