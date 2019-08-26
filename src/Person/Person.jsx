import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

const Person = ({ children, name, caption }) => (
  <React.Fragment>
    {children}
    <Typography color='inherit' variant='subtitle1'>{name}</Typography>
    { caption ? <Typography color='inherit' variant='caption' paragraph>{caption}</Typography> : null }
  </React.Fragment>
)

Person.propTypes = {
  /**
   * Any sub-components you want to render. Children with a key of `attribution`
   * will be rendered below the donate button.
   */
  children: PropTypes.node,

  /**
   * Text that appears in the donate button
   */
  name: PropTypes.string.isRequired,

  /**
   * The callback function called when the button is clicked.
   */
  caption: PropTypes.string
}

Person.defaultProps = {
  name: ''
}


export default Person
