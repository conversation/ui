import MUITab from '@material-ui/core/Tab'
import React from 'react'

/**
 * The `<Tab>` component allows rendering a tabbed navigation, inheriting all props of
 * MUI's `Tab` and `Tabs` components.
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
export const Tab = ({ ...other }) => <MUITab disableRipple {...other} />

export default Tab
