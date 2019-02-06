import PropTypes from 'prop-types'
import React from 'react'
import { DateTimePicker as MaterialDateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'

/**
 * The `<DateTimePicker>` component allows a user to easily select a specific time of the day.
 *
 * This component uses the `material-ui-pickers` library, which requires an external date management library
 * to parse dates. You can use `moment`, `luxon` or `date-fns` (only 2.0.0-alpha version).
 *
 * You can check `material-ui-pickers` documentaiton to check all the available props for this component:
 * https://material-ui-pickers.firebaseapp.com/api/datetimepicker
 *
 * ```js
 * // Select date management library to be used with the date time picker. You can use
 * import MomentUtils from '@date-io/moment';
 * import DateFnsUtils from '@date-io/date-fns';
 * import LuxonUtils from '@date-io/luxon';
 *
 * import { DateTimePicker } from '@theconversation/ui'
 *
 * <DateTimePicker dateManagementLibrary={MomentUtils} onChange={alert('date changed')} />
 * <DateTimePicker dateManagementLibrary={DateFnsUtils} onChange={alert('date changed')} />
 * <DateTimePicker dateManagementLibrary={LuxonUtils} onChange={alert('date changed')} />
 * ```
 */
const DateTimePicker = ({ dateManagementLibrary, ...other }) => (
  <MuiPickersUtilsProvider utils={dateManagementLibrary}>
    <MaterialDateTimePicker {...other} />
  </MuiPickersUtilsProvider>
)

DateTimePicker.propTypes = {
  /**
   * One of `@date-io` management libraries. Available libraries are `@date-io/moment`, `@date-io/date-fns` and
   * `@date-io/luxon`
   */
  dateManagementLibrary: PropTypes.func,

  /**
   * The callback function called when the date changes.
   */
  onChange: PropTypes.func.isRequired
}

export default DateTimePicker
