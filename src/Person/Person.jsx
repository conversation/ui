import React from 'react'

import Typography from '../Typography'

const Person = ({ children, name, caption }) => (
  <React.Fragment>
    {children}
    <Typography color='inherit' variant='subtitle1'>{name}</Typography>
    <Typography color='inherit' variant='caption'>{caption}</Typography>
  </React.Fragment>
)

export default Person
