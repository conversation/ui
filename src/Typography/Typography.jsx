import MaterialTypography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

/**
 * The `<Typography>` component contains a block of text which is styled
 * according to the current theme.
 *
 * ~~~js
 * import { Typography } from '@theconversation/ui'
 *
 * <Typography variant='body1'>
 *   lorem ipsum
 * </Typography>
 * ~~~
 */
const styles = theme => ({
  h1: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '1.75rem'
  },

  h2: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '1.625rem'
  },

  h3: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '1.375rem'
  },

  h4: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '1.25rem'
  },

  h5: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '1.125rem'
  },

  h6: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '0.25px',
    fontSize: '1rem'
  },

  body1: {
    fontFamily: 'Libre Baskerville',
    lineHeight: '1.5',
    fontSize: '1rem'
  },

  body2: {
    fontFamily: 'Noto Sans',
    lineHeight: '1.5',
    fontSize: '1.125rem'
  },

  button: {
    letterSpacing: 0.25,
    textTransform: 'none',
    fontSize: '0.875rem'
  },

  overline: {
    letterSpacing: 0.25,
    textTransform: 'none',
    fontSize: '0.875rem'
  },

  caption: {
    fontSize: '0.75rem'
  },

  subtitle1: {
    fontSize: '1rem'
  },

  subtitle2: {
    fontSize: '0.75rem'
  }
})

export const Typography = ({ children, colour, ...other }) => (
  <MaterialTypography color={colour} {...other}>
    {children}
  </MaterialTypography>
)

Typography.propTypes = {
  /**
   * The alignment of the text.
   */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify', 'inherit']),

  /**
   * The content of the text.
   */
  children: PropTypes.node.isRequired,

  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The colour of the text.
   */
  colour: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'inherit']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,

  /**
   * If `true`, the text will not wrap, but instead will be truncated with an
   * ellipsis.
   */
  noWrap: PropTypes.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,

  /**
   * The variant of the text styling.
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
    'inherit'
  ])
}

Typography.defaultProps = {
  align: 'inherit',
  colour: 'inherit',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'inherit'
}

export default withStyles(styles)(Typography)
