import Chip from '@material-ui/core/Chip'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputBase from '@material-ui/core/InputBase'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import { blue, grey } from '@material-ui/core/colors'

import FormLabel from '../form/FormLabel'

const styles = theme => {
  const light = theme.palette.type === 'light'
  const borderColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)'

  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: theme.spacing.unit / 2
    },
    label: {
      marginTop: 8,
      marginBottom: theme.spacing.unit
    },
    chip: {
      margin: theme.spacing.unit / 2
    },
    error: {
      borderColor: `${theme.palette.error.main}`
    },
    focused: {
      borderColor: `${theme.palette.primary.main}`
    },
    disabled: {
      borderColor: borderColor,
      backgroundColor: grey[100]
    },
    standard: {
      borderColor: borderColor
    },
    inputRoot: {
      margin: theme.spacing.unit / 2
    },
    chipContainer: {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: 4,
      paddingLeft: 8,
      paddingTop: 8,
      textAlign: 'left',
      transition: theme.transitions.create('border-color', {
        duration: theme.transitions.duration.shorter
      })
    }
  }
}

const keyCodes = {
  ENTER: 13,
  BACKSPACE: 8,
  DELETE: 46,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
}

const ChipRenderer = ({ entry, isFocused, isDisabled, handleClick, handleDelete, defaultStyle, className }, key) => {
  let backgroundColor = grey[300]
  if (!isDisabled) {
    if (isFocused) {
      backgroundColor = blue[100]
    } else if (entry.valid) {
      backgroundColor = blue[300]
    }
  }
  return (<Chip
    key={key}
    className={className}
    style={{
      ...defaultStyle,
      pointerEvents: isDisabled ? 'none' : undefined,
      backgroundColor: backgroundColor,
      margin: '0 8px 8px 0'
    }}
    onClick={handleClick}
    onDelete={handleDelete}
    label={entry.value}
  />)
}

/**
 * The `<ChipInput>` component allows the editing and validation of a
 * collection of items.
 *
 * It is designed to be a better experience when things like email addresses,
 * by preventing the need to comma-separate the addresses manually.
 *
 * ~~~js
 * import { ChipInput } from '@theconversation/ui'
 *
 * <ChipInput
 *   entries={['foo@example.com', 'bar@example.com']}
 *   helperText='Enter a list of email addresses'
 *   label='Email Addresses'
 * />
 * ~~~
 */
export class ChipInput extends React.Component {
  constructor (props) {
    super(props)
    let entries = this.validateEntries(props.entries || [])
    if (this.props.sorted) {
      entries = this.sortEntries(entries)
    }
    this.state = {
      entries,
      inputValue: props.defaultValue
    }
  }

  handleAddEntry = (value) => {
    let { entries } = this.state
    const validatedEntry = this.validateEntry(value)
    entries.push(validatedEntry)
    if (this.props.sorted) {
      entries = this.sortEntries(entries)
    }
    if (this.props.onChange) {
      this.props.onChange(entries)
    }
    this.setState({ entries })
  }

  handleDeleteEntry = (entry, index) => {
    let { entries } = this.state
    entries.splice(index, 1)
    if (this.props.onChange) {
      this.props.onChange(entries)
    }
    this.setState({ entries: entries })
  }

  handleInputFocus = event => {
    this.setState({ isFocused: true })
  }

  handleInputBlur = (event) => {
    this.setState({ isFocused: false })
    if (this.state.focusedChip != null) {
      this.setState({ focusedChip: null })
    }
  }

  focus = () => {
    this.actualInput.focus()
    if (this.state.focusedChip != null) {
      this.setState({ focusedChip: null })
    }
  }

  handleKeyDown = (event) => {
    const { focusedChip, entries } = this.state
    if (event.keyCode === keyCodes.ENTER) {
      if (event.target.value.trim().length === 0) {
        return
      }
      const result = this.handleAddEntry(event.target.value)
      this.clearInput()
      if (result !== false) {
        event.preventDefault()
      }
      return
    }

    switch (event.keyCode) {
      case keyCodes.BACKSPACE:
      case keyCodes.DELETE:
        if (event.target.value === '') {
          if (focusedChip != null) {
            this.handleDeleteEntry(entries[focusedChip], focusedChip)
            if (focusedChip > 0) {
              this.setState({ focusedChip: focusedChip - 1 })
            }
          } else {
            this.setState({ focusedChip: entries.length - 1 })
          }
        }
        break
      case keyCodes.LEFT_ARROW:
        if (focusedChip == null && event.target.value === '' && entries.length) {
          this.setState({ focusedChip: entries.length - 1 })
        } else if (focusedChip != null && focusedChip > 0) {
          this.setState({ focusedChip: focusedChip - 1 })
        }
        break
      case keyCodes.RIGHT_ARROW:
        if (focusedChip != null && focusedChip < entries.length - 1) {
          this.setState({ focusedChip: focusedChip + 1 })
        } else {
          this.setState({ focusedChip: null })
        }
        break
      default:
        this.setState({ focusedChip: null })
        break
    }
  }

  clearInput = () => {
    this.setState({ inputValue: '' })
  }

  updateInput = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  sortEntries (entries) {
    if (this.props.onSortEntry) {
      return entries.concat().sort(this.props.onSortEntry)
    }
    return entries.concat().sort((a, b) => {
      const valA = a.value.toLowerCase()
      const valB = b.value.toLowerCase()
      return valA < valB ? -1 : valA > valB ? 1 : 0
    })
  }

  validateEntries (entries) {
    return entries.map(e => this.validateEntry(e))
  }

  validateEntry (element) {
    let isValid = this.props.onValidateEntry(element)
    return { value: element, valid: isValid }
  }

  /**
   * Set the reference to the actual input, that is the input of the Input.
   * @param {object} ref - The reference
   */
  setActualInputRef = ref => {
    this.actualInput = ref
    if (this.props.inputRef) {
      this.props.inputRef(ref)
    }
  }

  render () {
    const {
      disabled,
      error,
      fullWidth,
      helperText,
      id,
      label,
      required,
      placeholder,
      className,
      classes
    } = this.props
    const { inputValue } = this.state
    let { entries } = this.state

    const chips = entries.map((e, i) => (
      <ChipRenderer
        key={e.value + i}
        entry={e}
        classes={{}}
        isDisabled={disabled}
        isFocused={this.state.focusedChip === i}
        handleClick={() => this.setState({ focusedChip: i })}
        handleDelete={() => this.handleDeleteEntry(e, i)}
      />
    ))

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined

    return (
      <FormControl
        aria-describedby={helperTextId}
        className={cx(className, classes.root)}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        onClick={this.focus}
      >
        {label && (
          <FormLabel
            focused={this.state.isFocused}
            className={classes.label}
            htmlFor={id}
            required={required}
            disabled={disabled}
          >
            {label}
          </FormLabel>
        )}
        <div
          className={cx(classes.chipContainer, {
            [classes.standard]: !this.state.isFocused && !error,
            [classes.focused]: this.state.isFocused,
            [classes.disabled]: disabled,
            [classes.error]: error
          })}
        >
          {chips}
          <InputBase
            className={this.props.classes.inputRoot}
            onChange={this.updateInput}
            onKeyDown={this.handleKeyDown}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            inputRef={this.setActualInputRef}
            value={inputValue}
            placeholder={inputValue.length === 0 && entries.length === 0 ? placeholder : null}
            disabled={disabled}
          />
        </div>
        {helperText && (
          <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
        )}
      </FormControl>
    )
  }
}

ChipInput.propTypes = {
  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The list of entries with which to initialize the component. Note that this
   * is not a controlled input, it's only read in the constructor.
   */
  entries: PropTypes.array,

  /**
   * A boolean value indicating whether the entries should be sorted after each
   * addition.
   */
  sorted: PropTypes.bool,

  /**
   * The callback function called to sort the entries. If no callback function
   * is given, then an ascending alphabetical sort is used if sorting is
   * enabled.
   */
  onSortEntry: PropTypes.func,

  /**
   * The callback function called when an entry is added or removed.
   */
  onChange: PropTypes.func,

  /**
   * The callback function called to validate the entries. If no function is
   * supplied, then all entries are considered to be valid.
   */
  onValidateEntry: PropTypes.func,

  /**
   * A boolean value indicating whether the input is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The text displayed above the text field.
   */
  label: PropTypes.string,

  /**
   * The text displayed below the input.
   */
  helperText: PropTypes.string,

  /**
   * The default value in the text input.
   */
  defaultValue: PropTypes.string,

  /**
   * The text displayed inside text field before the user enters a value.
   */
  placeholder: PropTypes.string
}

ChipInput.defaultProps = {
  disabled: false,
  entries: [],
  sorted: false,
  classes: {},
  onValidateEntry: () => true,
  defaultValue: ''
}

export default withStyles(styles)(ChipInput)
