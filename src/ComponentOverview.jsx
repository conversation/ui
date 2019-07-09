import Marked from 'storybook-readme/components/Marked'
import React from 'react'
import get from 'lodash/get'

import { propDefinitions } from './util'

const Row = ({ property, propType, required, description, defaultValue }) => (
  <tr key={property}>
    <td>
      {required ? <strong>{property}</strong> : property}
    </td>
    <td>{get(propType, 'name')}</td>
    <td>{defaultValue}</td>
    <td><Marked md={description || ''} /></td>
  </tr>
)

const PropDefinitionsTable = ({ propDefinitions }) => (
  <table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {propDefinitions.map((propDefinition, index) =>
        <Row key={index} {...propDefinition} />
      )}
    </tbody>
  </table>
)

/**
 * The <ComponentOverview> component renders an overview of a react component
 * based on the docgen data.
 */
const ComponentOverview = ({ component, heading, children }) => (
  <React.Fragment>
    <div className='markdown-body'>
      <h1>{heading || 'Overview'}</h1>
      <Marked md={get(component, '__docgenInfo.description', '')} />
    </div>
    {children}
    <div className='markdown-body'>
      <h2>Props</h2>
      <PropDefinitionsTable propDefinitions={propDefinitions(component)} />
    </div>
  </React.Fragment>
)

export default ComponentOverview
