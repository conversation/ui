## Unreleased

* Decreased tooltip z-index value on all themes (tooltips will appear behind modals)
* Remove `deepmerge` dependency
    * We're using MUI's `@material-ui/utils` implementation, added on https://github.com/mui-org/material-ui/pull/17982

# 2.32.0 (2021-05-14)

* Export MUI `Tooltip` and `ClickAwayListener`

# 2.31.0 (2021-03-24)

* Lock `@material-ui/styles` to same version as `@material-ui/core`

# 2.30.1 (2021-03-19)

* `Dropdown` and `TextField` labels prop types updated from `string` to `node`

# 2.30.0 (2021-03-10)

* Add tabbed navigation components to the UI library
    * Create the `Tab` component
    * Create the `Tabs` component

# 2.29.0 (2021-02-23)

* Create the `SelectMenu` and `SelectMenuItem` components

# 2.28.0 (2021-02-19)

* Update `@material-ui/core` from 4.5.0 to 4.5.2
* Update `@material-ui/lab` from 4.0.0-alpha.23 to 4.0.0-alpha.30

# 2.27.0 (2021-02-18)

* Update `@material-ui/core` from 4.4.3 to 4.5.0

# 2.26.1 (2021-02-15)

* Fix bug introduced in 2.23.0 where `TextField` would appear to ignore changes to its `error` prop.

# 2.26.0 (2020-12-07)

* `Dropdown` component now renders MUI native `Select` component by default

# 2.25.1 (2020-11-19)

* Avoid passing non-MUI styles to MUI

# 2.25.0 (2020-11-13)

* Upgrade @material-ui/core to v4.4.3

# 2.24.0 (2020-11-05)

* Allow the `Dropdown` component `value` prop to be of number or string types

# 2.23.0 (2020-10-19)

* Allow text fields to have max length validation with character count

# 2.22.0 (2020-10-02)

* Allow passing custom props to MUI's Dialog on `DonationDialog`

# 2.21.0 (2020-09-07)

* Update "The Conversation" and "La Conversation" SVGs

# 2.20.0 (2020-09-01)

* Allow unused modules to be tree shaken

# 2.19.0 (2020-07-20)

* Removed now-unused ThinDonationBanner component
* Dependabot updates

# 2.18.0 (2019-11-12)

* Add stylesheet property resets to heading variants of Typography

# 2.17.0 (2019-11-07)

* Adds a ThemeSelector component
* Update docs in example
* Change MessageTileHeader from h3 to h5

# 2.16.0 (2019-10-09)

* StickyPopup fixes (https://github.com/conversation/ui/pull/108)

# 2.15.0 (2019-10-01)

* Exported StickyPopup

# 2.14.0 (2019-09-26)

* Add responsive desktop-device font sizes to Typography component
* Updates font sizes for Typography

# 2.13.0 (2019-09-17)

* Move ThinBanner and ThickBanner to top level, outside promos.
* Added props to MessageTile to allow it to be more configurable
* Added more examples of MessageTile

# 2.12.0 (2019-08-26)

* Allow `Person` to _optionally_ accept a `caption` prop
* Add `ThickBanner` component

# 2.11.0 (2019-08-15)

* Bumps @material-ui/core to 4.3.2, and related packages in lockstep (https://github.com/conversation/ui/pull/89)

## 2.10.1 (2019-08-12)

* Adjust spacing on `MessageTile` component (https://github.com/conversation/ui/pull/87)

## 2.10.0 (2019-07-26)

* Rename all TCUI logos to be without the `tcui` prefix

## 2.9.0 (2019-07-24)

* Remove `Card` and related components (https://github.com/conversation/ui/pull/84)

## 2.8.0 (2019-07-15)

* Export MUI `Box` (https://github.com/conversation/ui/pull/83)
* Export our three themes and three palettes (https://github.com/conversation/ui/pull/83)

## 2.7.1 (2019-07-15)

* Add MessageTile (and three subcomponents) for upcoming promos (https://github.com/conversation/ui/pull/82)

## 2.6.1 (2019-07-12)

* Update donation components to use themes (https://github.com/conversation/ui/pull/78)

## 2.6.0 (2019-07-09)

* Update Material UI to 4.2.0 (https://github.com/conversation/ui/pull/81)

## 2.5.0 (2019-07-08)

* Export MUI Drawer component (https://github.com/conversation/ui/pull/79)
* Update TCUI default theme, and add requried additional themes/colours (https://github.com/conversation/ui/pull/75)
* Update UI for mobile newsletter sign up banner (https://github.com/conversation/ui/pull/73)

## 2.4.0 (2019-07-01)

* Dot not export the `Swatch` component (https://github.com/conversation/tc-donations/pull/839#issuecomment-507257651)

## 2.3.4 (2019-06-25)

* TC large logo PNG image fixes (https://github.com/conversation/ui/pull/72)

## 2.3.2 (2019-06-14)

* TC logo images fixes (https://github.com/conversation/ui/pull/71)

## 2.3.1 (2019-06-03)

* TC logo favicons white background fix

## 2.3.0 (2019-05-14)

* Add TC logo images

## 2.2.3 (2019-05-14)

* Update donation dialog breakpoints

## 2.2.2 (2019-05-09)

* Add MUI Radio components from Material UI to list of exported MUI components

## 2.2.1 (2019-05-07)

* Add Form components from Material UI to list of exported MUI components

## 2.2.0 (2019-05-01)

* Allow `TextField` to have `email` type

## 2.1.1 (2019-05-01)

* Set the `ArticleDonationBanner` background colour to `#f8f8f8`

## 2.1.0 (2019-04-30)

* Add `open` prop to the `DonationBanner` component

## 2.0.1 (2019-04-30)

* Minor design fix to `Dropdown` to avoid `:focus` overflow of background

## 2.0.0 (2019-04-29)

* Change the `DonationDialog` `href` prop to an `onClick` callback
* Change the `ArticleDonationBanner` `href` prop to an `onClick` callback
* Change the `ThinDonationBanner` `href` prop to an `onClick` callback
* Remove unused `donateText` prop from `ThinDonationBanner` component

## 1.23.2 (2019-04-24)

* Add `!important` to `DonationDialog`, `DonationBanner` and `ThinDonationBanner` button colours

## 1.23.1 (2019-04-24)

 * Export `DonationBanner` and `ThinDonationBanner` 🤦

## 1.23.0 (2019-04-24)

 * Add `DonationBanner`
 * Add `ThinDonationBanner`
 * Remove bottom padding from `DialogContent`
 * Tweak spacing around Avatar in `ArticleDonationBanner`

## 1.22.0 (2019-04-23)

 * Allow sharing class name generators across instances of `ThemeProvider`

## 1.21.0 (2019-04-18)

 * Allow type number for TextField input

## 1.20.1 (2019-04-17)

* Fix global CSS conflict with `ArticleDonationBanner` button

## 1.20.0 (2019-04-12)

* Remove box shadow from buttons
* Make heading variants bold
* Add `prominent` prop to `Button` component
* Add extra allowable avatar size
* Add `ArticleDonationBanner` component

## 1.19.3 (2019-04-12)

* Set the `DonationDialog` actions bottom margin to 48px

## 1.19.2 (2019-04-11)

* Set ARIA label on `DonationDialog` close button
* Upgrade react to 16.8.6

## 1.19.1 (2019-04-11)

* Include non-JS assets in output directory

## 1.19.0 (2019-04-11)

* Set overflow hidden for `TextField` input wrapper
* Unify colours and typography under single theme
* Add named colours
* Add `Avatar` component
* Add `MiniDivider` component
* Add `Person` component
* Add `DonationDialog` component

## 1.18.1 (2019-04-04)

* Allow specifying the `autoComplete` prop as a boolean or string

## 1.18.0 (2019-04-02)

* Allow `Autocomplete` to pass the `name` prop to the underlying `Textfield` component

## 1.17.0 (2019-04-02)

* Add `id`, `onBlur`, and `onFocus` props to `Autocomplete` component

## 1.16.0 (2019-04-01)

* Add `Autocomplete` component

## 1.15.0 (2019-03-31)

* Upgrade storybook to 5.0.5

## 1.14.0 (2019-03-26)

* Add `ToggleButton` and `ToggleButtonGroup` components

## 1.13.0 (2019-03-19)

* Allow `ChipInput` to receive `id` prop

## 1.12.0 (2019-03-18)

* Upgrade storybook to 5.x
* Added `onBlur` and `onFocus` events to `TextField`
* Added `onBlur` and `onFocus` events to `Dropdown`

## 1.11.0

* Add `ChipInput` component

## 1.9.0

* Add the `DatePicker` component
* Add the `DateTimePicker` component
* Add the `FormControlLabel` component
* Add the `FormGroup` component
* Add the `TimePicker` component

## 1.8.2

* Add the `Switch` component

## 1.7.0

* Add `classes` prop types
* Add `component` prop type to `Button` component
* Add `legacy` and `future` themes
* Change default theme to `legacy`

## 1.6.4 (2018-12-12)

* Export Material UI `Toolbar` component

## 1.6.3 (2018-12-12)

* Fix travis config

## 1.6.2 (2018-12-11)

* Add `Card` prop types
* Add `href` to `Button` prop types

## 1.6.1 (2018-12-10)

* Don't capitalise button text
* Ensure form labels are left aligned
* Add `Button` prop types
* Add `TextField` prop types
* Add `Dropdown` prop types
* Switch body1 and body2 fonts

## 1.6.0 (2018-11-28)

* Fix popover margin for dropdowns
* Server-side rendering support
* Rename `DialogButton` to `DialogAction`
* Add `Card` component

## 1.5.1 (2018-11-23)

* Add linting
* Make the dropdown transition faster

## 1.5.0 (2018-11-23)

* Add `Dropdown` component
