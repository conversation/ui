import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '../Typography'
import { Button } from '../index'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.grey[50],
    padding: theme.spacing.unit * 3
  },
  // TODO: this is temporary while we work out what to do about
  // themes and palettes properly
  button: {
    backgroundColor: theme.palette.core && theme.palette.core.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.core && theme.palette.core.main
    }
  }
})

/**
 * The `<ArticleDonationBanner>` component is a block that can contain text and
 * attribution, intended for donations campaigns. It has a callback, `onVisible`,
 * for tracking impressions.
 *
 * ~~~js
 * <ArticleDonationBanner href="http://donate.theconverastion.com" donateText="Donate now">
 *   <Typography variant="h6" gutterBottom>Some text</Typography>
 *   <Typography variant="body1" paragraph>
 *     More text
 *   </Typography>
 *   <div key="attribution">
 *     <Typography gutterBottom>
 *       <Person name="Full name" caption="A fine caption" />
 *     </Typography>
 *     <Avatar size={48} />
 *   </div>
 * </ArticleDonationBanner>
 * ~~~
 *
 */
export const ArticleDonationBanner = ({ children, classes, href, donateText }) => {
  const filteredChildren = children.filter(component => component.key !== 'attribution')
  const attribution = children.filter(component => component.key === 'attribution')
  const paperClasses = {
    root: classes.root
  }

  return (
    <Paper elevation={0} classes={paperClasses}>
      {filteredChildren}
      <Typography paragraph>
        <Button prominent className={classes.button} href={href}>{donateText}</Button>
      </Typography>
      {attribution}
    </Paper>
  )
}

ArticleDonationBanner.propTypes = {
  /**
   * Any sub-components you want to render. Children with a key of 'attribution'
   * will be rendered below the donate button.
   */
  children: PropTypes.node.isRequired,

  /**
   * URL that clicking donate button points to
   */
  href: PropTypes.string,

  /**
   * Text that appears in the donate button
   */
  donateText: PropTypes.string
}

ArticleDonationBanner.defaultProps = {
  href: 'http://example.com',
  donateText: 'Donate'
}

export default withStyles(styles)(ArticleDonationBanner)
