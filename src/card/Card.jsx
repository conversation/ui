import MaterialCard from '@material-ui/core/Card'
import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    textAlign: 'left'
  }
})

/**
 * The `<Card>` component contains content and actions about a single subject.
 *
 * They should be easy to scan for relevant and actionable information.
 * Elements, like text and images, should be placed on them in a way that
 * clearly indicates hierarchy.
 *
 * ~~~js
 * import { Card, CardActions, CardAction, CardContent, CardHeader } from '@theconversation/ui'
 *
 * <Card>
 *   <CardHeader title='Title' subheader='Subheader' />
 *   <CardContent>
 *     <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
 *   </CardContent>
 *   <CardActions>
 *     <CardAction variant='primary'>Click Me!</CardAction>
 *   </CardActions>
 * </Card>
 * ~~~
 */
export const Card = ({ children, raised, ...other }) => (
  <MaterialCard {...other} raised={raised}>
    {children}
  </MaterialCard>
)

Card.propTypes = {
  /**
   * Card children, usually the included sub-components.
   */
  children: PropTypes.node.isRequired,

  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * A boolean value indicating whether the card is raised.
   */
  raised: PropTypes.bool
}

Card.defaultProps = {
  raised: false
}

export default withStyles(styles)(Card)
