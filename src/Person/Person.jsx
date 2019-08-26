import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

/**
 * The `<Person>` component renders a name and a caption in a consistent manner.
 *
 * Should be used when you need to attribute a user with some other content on the page.
 *
 * Eg.
 *
 *  - Author of content
 *  - Donations message
 *  - Comment
 *
 * You can optionally include a caption.
 *
 * You can optionally include an avatar, but the behaviour isn't great yet.
 * Will be refined shortly.
 *
 * ~~~js
 * <Person name='Colonel Koala' caption='Leader of the Koala Freedom Collective'>
 *  <Avatar />
 * </Person>
 *
 * <Person name='From the whole Koala Army'>
 *   <Avatar />
 * </Person>
 * ~~~
 */
export const Person = ({ children, name, caption }) => (
  <React.Fragment>
    {children}
    <Typography color='inherit' variant='subtitle1'>{name}</Typography>
    { caption ? <Typography color='inherit' variant='caption' paragraph>{caption}</Typography> : null }
  </React.Fragment>
)

Person.propTypes = {
  /**
   * Any sub-components you want to render. Children will be rendered
   * above the `name` and `caption`
   */
  children: PropTypes.node,

  /**
   * The name of the person
   */
  name: PropTypes.string.isRequired,

  /**
   * Typically their job-role
   */
  caption: PropTypes.string
}

Person.defaultProps = {
  name: ''
}

export default Person
