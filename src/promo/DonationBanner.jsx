import Button from '../Button'
import CloseIcon from '@material-ui/icons/Close'
import MaterialIconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '../Typography'
import corePalette from '../styles/palettes/core'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  // TODO: this is temporary while we work out what to do about
  // themes and palettes properly
  paper: {
    position: 'relative',
    backgroundColor: corePalette[600],
    color: '#fff',
    borderRadius: 0,
    padding: theme.spacing(4),
    textAlign: 'center'
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: theme.spacing(1)
  },
  typography: {
    maxWidth: theme.spacing(90),
    padding: `0 ${theme.spacing(4)}px`, // ensure there's always room for close button
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
 * a button.
 *
 * ~~~js
 * <DonationBanner>
 *   The Conversation provides clean information in a world infected with spin. Please donate.
 * </DonationBanner>
 * ~~~
 */
export const DonationBanner = ({
  children,
  classes,
  closeText,
  donateText,
  onClick,
  onClose,
  open
}) => {
  // Don't bother rendering if it's not open.
  if (!open) {
    return null
  }

  return (
    <Paper className={classes.paper} elevation={0}>
      <MaterialIconButton color='inherit' className={classes.close} onClick={onClose} aria-label={closeText}>
        <CloseIcon />
      </MaterialIconButton>
      <Typography variant='h5' paragraph className={classes.typography}>{children}</Typography>
      <Button prominent className={classes.button} onClick={onClick}>
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
   * Accessibility text for close button.
   */
  closeText: PropTypes.string,

  /**
   * Text that appears in the donate button.
   */
  donateText: PropTypes.string,

  /**
   * The callback called when button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * The callback called when banner is dismissed.
   */
  onClose: PropTypes.func,

  /**
   * A boolean value indicating whether the banner is currently displayed.
   */
  open: PropTypes.bool
}

DonationBanner.defaultProps = {
  open: false,
  donateText: 'Donate now',
  closeText: 'Close'
}

export default withStyles(styles)(DonationBanner)
