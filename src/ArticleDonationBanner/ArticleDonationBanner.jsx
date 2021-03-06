import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '../Typography'
import Button from '../Button'
import { ThemeProvider } from '../styles'
import coreTheme from '../styles/themes/core'

const styles = theme => ({
  root: {
    backgroundColor: '#f8f8f8',
    padding: theme.spacing(3)
  },
  // TODO: this is temporary while we work out what to do about
  // themes and palettes properly
  button: {
    fontWeight: 'bold'
  }
})

/**
 * The `<ArticleDonationBanner>` component is a block that can contain text and
 * attribution, intended for donations campaigns.
 *
 * ~~~js
 * <ArticleDonationBanner donateText="Donate now">
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
export const ArticleDonationBanner = ({ children, classes, donateText, onClick }) => {
  const filteredChildren = children.filter(component => component.key !== 'attribution')
  const attribution = children.filter(component => component.key === 'attribution')

  return (
    <Paper elevation={0} className={classes.root}>
      {filteredChildren}
      <Typography paragraph>
        <ThemeProvider theme={coreTheme()}>
          <Button prominent color='primary' className={classes.button} onClick={onClick}>{donateText}</Button>
        </ThemeProvider>
      </Typography>
      {attribution}
    </Paper>
  )
}

ArticleDonationBanner.propTypes = {
  /**
   * Any sub-components you want to render. Children with a key of `attribution`
   * will be rendered below the donate button.
   */
  children: PropTypes.node.isRequired,

  /**
   * Text that appears in the donate button
   */
  donateText: PropTypes.string,

  /**
   * The callback function called when the button is clicked.
   */
  onClick: PropTypes.func
}

ArticleDonationBanner.defaultProps = {
  donateText: 'Donate'
}

export default withStyles(styles)(ArticleDonationBanner)
