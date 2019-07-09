import PropTypes from 'prop-types'
import React from 'react'
import { TimePicker as MaterialTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

/**
 * The `<TimePicker>` component allows a user to easily select a specific time of the day.
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
 * import { TimePicker } from '@theconversation/ui'
 *
 * <TimePicker dateManagementLibrary={MomentUtils} onChange={alert('date changed')} />
 * <TimePicker dateManagementLibrary={DateFnsUtils} onChange={alert('date changed')} />
 * <TimePicker dateManagementLibrary={LuxonUtils} onChange={alert('date changed')} />
 * ```
 */
const TimePicker = ({ dateManagementLibrary, ...other }) => (
  <MuiPickersUtilsProvider utils={dateManagementLibrary}>
    <MaterialTimePicker {...other} />
  </MuiPickersUtilsProvider>
)

TimePicker.propTypes = {
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

export default TimePicker
