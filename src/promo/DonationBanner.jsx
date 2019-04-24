import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import MaterialIconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Button from '../Button'
import Typography from '../Typography'

const styles = theme => ({
  // TODO: this is temporary while we work out what to do about
  // themes and palettes properly
  paper: {
    position: 'relative',
    backgroundColor: theme.palette.core && theme.palette.core.main,
    color: theme.palette.primary.contrastText,
    borderRadius: 0,
    padding: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: theme.spacing.unit
  },
  typography: {
    maxWidth: theme.spacing.unit * 90,
    padding: `0 ${theme.spacing.unit * 4}px`, // ensure there's always room for close button
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  // Donation button styles are a special case until we decide
  // "inverted" buttons are going to be a more widespread thing
  button: {
    // We need to mark the colour with `!important` to avoid global hyperlink
    // styles overriding this value.
    color: [theme.palette.text.primary, '!important'],
    backgroundColor: '#fff',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#f1f1f2'
    }
  }
})

/**
 * The `<DonationBanner>` component is a large, dismissable banner that contains
 * a button which links to the given `href`.
 *
 * ~~~js
 * <DonationBanner href='http://donate.theconverastion.com'>
 *   The Conversation provides clean information in a world infected with spin. Please donate.
 * </DonationBanner>
 * ~~~
 */
export const DonationBanner = ({ children, classes, href, donateText, closeText, onClose }) => {
  return (
    <Paper className={classes.paper} elevation={0}>
      <MaterialIconButton color='inherit' className={classes.close} onClick={onClose} aria-label={closeText}>
        <CloseIcon />
      </MaterialIconButton>
      <Typography variant='h5' paragraph className={classes.typography}>{children}</Typography>
      <Button prominent href={href} className={classes.button}>
        {donateText}
      </Button>
    </Paper>
  )
}

DonationBanner.propTypes = {
  /**
   * Any sub-components you want to render.
   */
  children: PropTypes.node.isRequired,

  /**
   * URL that clicking donate button points to
   */
  href: PropTypes.string,

  /**
   * Text that appears in the donate button
   */
  donateText: PropTypes.string,

  /**
   * Callback that is executed when DonationBanner is dismissed
   */
  onClose: PropTypes.func,

  /**
   * Accessibility text for close button
   */
  closeText: PropTypes.string
}

DonationBanner.defaultProps = {
  href: 'http://example.com',
  donateText: 'Donate now',
  closeText: 'Close',
  onClose: () => {}
}

export default withStyles(styles)(DonationBanner)
