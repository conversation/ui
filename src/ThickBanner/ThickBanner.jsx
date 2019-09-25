import Button from '../Button'
import CloseIcon from '@material-ui/icons/Close'
import MaterialIconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import Typography from '../Typography'
import { styledBy } from '../util'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  box: {
    position: 'relative',
    backgroundColor: styledBy('color', {
      default: theme.palette.primary.main,
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main
    }),
    color: styledBy('color', {
      default: theme.palette.primary.contrastText,
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText
    }),
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
    backgroundColor: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#f1f1f2'
    }
  }
})

/**
 * The `<ThickBanner>` component is a clickable banner that can
 * contain a short amount of text and a call-to-action button.
 *
 * Intended for use on desktop as an alternative to `<ThinBanner>`, it can
 * also be used to promote surveys (traditionally with a green background) and
 * newsletters (traditionally with a blue background).
 *
 * To change the colour of the banner, wrap it in a ThemeProvider, pick a theme,
 * and select a `color` ala: ['default' | 'primary' | 'secondary']
 * For reference, read https://material-ui.com/api/paper/
 *
 * ~~~js
 *  <ThemeProvider theme={coreTheme()}>
 *    <ThickBanner
        buttonText="Subscribe"
        open
        color='primary'
        onClose={action('closed')}
        onClick={action('clicked')}
      >
 *      Stay informed with email updates
 *    </ThickBanner>
 *  </ThemeProvider>
 * ~~~
 *
 */
export const ThickBanner = ({ children,
  classes,
  closeText,
  color,
  buttonText,
  onClick,
  onClose,
  open
}) => {
  // Don't bother rendering if it's not open.
  if (!open) {
    return null
  }

  return (
    <Paper elevation={0} color={color} className={classes.box}>
      <MaterialIconButton color='inherit' className={classes.close} onClick={onClose} aria-label={closeText}>
        <CloseIcon />
      </MaterialIconButton>
      <Typography variant='h3' paragraph className={classes.typography}>{children}</Typography>
      <Button prominent className={classes.button} onClick={onClick}>
        {buttonText}
      </Button>
    </Paper>
  )
}

ThickBanner.defaultProps = {
  color: 'default',
  closeText: 'Close'
}

ThickBanner.propTypes = {
  /**
   * Any sub-components you want to render.
   */
  children: PropTypes.node.isRequired,

  /**
   * An optional colour to override the default text colour
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'inherit']),

  /**
   * The callback called when button is clicked.
   */
  onClick: PropTypes.func
}

export default withStyles(styles)(ThickBanner)
