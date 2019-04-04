import deburr from 'lodash/deburr'
import Downshift from 'downshift'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import { TextField } from '../index'

function renderInput ({ InputProps, fullWidth, ref, ...other }) {
  const otherProps = { ...other, ...InputProps }
  return (
    <TextField
      fullWidth
      inputRef={ref}
      {...otherProps}
    />
  )
}

function renderMenuItems ({ classes, highlightedIndex, getItemProps, results, selectedItem }) {
  return results.map((suggestion, index) =>
    renderSuggestion({
      classes,
      highlightedIndex,
      index,
      itemProps: getItemProps({ item: suggestion }),
      selectedItem,
      suggestion
    })
  )
}

function renderSuggestion ({ classes, suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index
  const isSelected = selectedItem === suggestion
  return (
    <MenuItem
      {...itemProps}
      className={isSelected ? classes.selectedMenuItem : null}
      component='div'
      key={suggestion.value}
      selected={isHighlighted}
      value={suggestion.value}
    >
      {suggestion.label}
    </MenuItem>
  )
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.string
}

function getSuggestions (suggestions, value) {
  const inputValue = deburr(value.trim()).toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep = count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue
      if (keep) { count += 1 }
      return keep
    })
}

const styles = theme => {
  return {
    container: {
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    selectedMenuItem: {
      fontWeight: 'bold'
    }
  }
}

/**
  * The `<Autocomplete>` component allows users to choose from a list of values
  * by typing the prefix of a value, and then choosing one of the suggestions.
  *
  * Suggestions should be provided as a list of value/label pairs. They should
  * be given in the form of \`{ value: 'ZW', label: 'Zimbabwe' }\`.
  *
  * ```js
  * import { Autocomplete } from '@theconversation/ui'
  *
  * const suggestions = [
  *   { value: 'AU', label: 'Austria' },
  *   { value: 'NZ', label: 'New Zealand' },
  *   { value: 'ZW', label: 'Zimbabwe' }
  * ]
  *
  * <Autocomplete
  *   label='Default'
  *   onChange={this.handleChange}
  *   placeholder='Search for a country'
  *   suggestions={suggestions}
  * />
  * ```
  */
export const Autocomplete = ({
  classes,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  suggestions
}) => (
  <Downshift
    onChange={item => onChange(item)}
    itemToString={item => item ? item.label : ''}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      highlightedIndex,
      inputValue,
      isOpen,
      selectedItem
    }) => {
      const results = getSuggestions(suggestions, inputValue)
      const isVisible = isOpen && results.length > 0
      const inputProps = { onBlur, onFocus }

      // Only set the ID property if we are actually overriding it. Otherwise,
      // let Downshift automatically generate an ID for us.
      if (id !== undefined) {
        inputProps.id = id
      }

      // Only set the name property if we are actually overriding it. Otherwise,
      // don't add a name field.
      if (name !== undefined) {
        inputProps.name = name
      }

      return (
        <div className={classes.container}>
          {
            renderInput({
              InputProps: getInputProps(inputProps),
              disabled,
              error,
              fullWidth,
              helperText,
              label,
              onChange,
              placeholder,
              required
            })
          }
          <Paper {...getMenuProps()} className={classes.paper} square>
            {isVisible ? renderMenuItems({ classes, highlightedIndex, getItemProps, results, selectedItem }) : null}
          </Paper>
        </div>
      )
    }}
  </Downshift>
)

Autocomplete.propTypes = {
  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * A boolean value indicating whether the text field is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * A boolean value indicating whether the text field is in an error state.
   */
  error: PropTypes.bool,

  /**
   * A boolean value indicating whether the text field should take up the full
   * width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The text displayed below the dropdown.
   */
  helperText: PropTypes.string,

  /**
   * The `id` of the underlying `<input>` element.
   */
  id: PropTypes.string,

  /**
   * The text displayed above the dropdown.
   */
  label: PropTypes.string,

  /**
   * The `name` of the underlying `<input>` element.
   */
  name: PropTypes.string,

  /**
   * The callback function called when the text field loses focus.
   */
  onBlur: PropTypes.func,

  /**
   * The callback function called when the dropdown value changes.
   */
  onChange: PropTypes.func,

  /**
   * The callback function called when the text field gains focus.
   */
  onFocus: PropTypes.func,

  /**
   * The text displayed inside text field before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * A boolean value indicating whether the text field is required to be filled
   * by the user.
   */
  required: PropTypes.bool,

  /**
   * The array of options for user selection
   */
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
}

Autocomplete.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  helperText: '',
  label: '',
  onChange: () => {},
  placeholder: '',
  required: false,
  suggestions: []
}

export default withStyles(styles)(Autocomplete)
