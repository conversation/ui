import MUITabs from '@material-ui/core/Tabs'
import React from 'react'

/**
 * The `<Tabs>` component organize and allow navigation between groups of content that are
 * related and at the same level of hierarchy.
 *
 * This component inherits from MUI's `Tabs` component.
 *
 * ```js
 * import { Tab, Tabs } from '@theconversation/ui'
 *
 *  <Tabs value={selectedTab} onChange={(event, value) => setSelectedTab(value)}>
 *    <Tab label="Item One" />
 *    <Tab label="Item Two" />
 *    <Tab label="Item Three" />
 *    <Tab label="Item Four" />
 *  </Tabs>
 * ```
 */
export const Tabs = ({ ...other }) => <MUITabs indicatorColor='primary' {...other} />

export default Tabs
