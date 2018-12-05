import Marked from 'storybook-readme/components/Marked'
import React from 'react'

import { propDefinitions } from './util'

const PropDefinitionsTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td>
            {required ? <strong>{property}</strong> : property}
          </td>
          <td>{propType.name}</td>
          <td>{defaultValue}</td>
          <td><Marked md={description} /></td>
        </tr>
      )
    }
  )

  return (
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  )
}

const Overview = ({ component }) => (
  <div className='markdown-body'>
    <h1>Overview</h1>
    <Marked md={component.__docgenInfo.description} />
    <h2>Props</h2>
    <PropDefinitionsTable propDefinitions={propDefinitions(component)} />
  </div>
)

export default Overview
