import MaterialCard from '@material-ui/core/Card'
import React from 'react'

/**
 * Overrides the Material Card component with some custom styles.
 */
const Card = ({ children, ...other }) => (
  <MaterialCard {...other}>
    {children}
  </MaterialCard>
)

export default Card
