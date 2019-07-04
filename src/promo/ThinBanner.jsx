import Button from '../Button'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  button: {
    borderRadius: 0,
    fontWeight: 'bold',
    justifyContent: 'left',
    padding: '9px 12px' // special case, needs to match padding on existing topbar
  },
  icon: {
    position: 'absolute',
    right: theme.spacing.unit
  }
})

/**
 * The `<ThinBanner>` component is a clickable block that can
 * contain a short amount of text.
 *
 * Intended for use on mobile as an alternative to `<DonationBanner>`, it can
 * also be used to promote surveys (traditionally with a green background) and
 * newsletters (traditionally with a blue background).
 *
 * To change the colour of the banner, wrap it in a ThemeProvider, pick a theme,
 * and select a `color` ala: ['default' | 'inherit' | 'primary' | 'secondary']
 * For reference, read https://material-ui.com/api/button/
 *
 * ~~~js
 *  <ThemeProvider theme={coreTheme()}>
 *    <ThinBanner color='primary' onClick={action('clicked')}>
 *      Stay informed with email updates
 *    </ThinBanner>
 *  </ThemeProvider>
 * ~~~
 *
 */
export const ThinBanner = ({ children, color, classes, onClick }) => {
  return (
    <Button
      fullWidth
      color={color}
      className={classes.button}
      onClick={onClick}
    >
      {children}
      <ArrowRightIcon className={classes.icon} />
    </Button>
  )
}

ThinBanner.defaultProps = {
  color: 'default'
}

ThinBanner.propTypes = {
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

export default withStyles(styles)(ThinBanner)
