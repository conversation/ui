import MaterialTypography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

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

export default Typography
