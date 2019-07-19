import PropTypes from 'prop-types'
import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

import StripeInput from './StripeInput'

const StripeElementWrapper = ({ component, label, onBlur, onChange, onFocus }) => {
  const [empty, setEmpty] = useState(true)
  const [error, setError] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleBlur = () => {
    setFocused(false)
    onBlur()
  }

  const handleChange = (event) => {
    const { empty, error } = event
    setEmpty(empty)
    setError(error)
    onChange(event)
  }

  const handleFocus = () => {
    setFocused(true)
    onFocus()
  }

  return (
    <div>
      <FormControl fullWidth margin='normal'>
        <InputLabel
          focused={focused}
          shrink={focused || !empty}
          error={!!error}
        >
          {label}
        </InputLabel>
        <Input
          fullWidth
          inputComponent={StripeInput}
          inputProps={{ component }}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </FormControl>
      {error && error.message}
    </div>
  )
}

StripeElementWrapper.propTypes = {
  /**
   * An `Element` component from [react-stripe-elements](https://github.com/stripe/react-stripe-elements)
   */
  component: PropTypes.func.isRequired,

  /**
   * The desired input label text
   */
  label: PropTypes.string.isRequired,

  /**
   * Called when the wrapped input loses focus
   */
  onBlur: PropTypes.func,

  /**
   * Called when the wrapped input's value changes
   */
  onChange: PropTypes.func,

  /**
   * Called when the wrapped input gets focus
   */
  onFocus: PropTypes.func
}

StripeElementWrapper.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {}
}

export default StripeElementWrapper
