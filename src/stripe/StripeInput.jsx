import PropTypes from 'prop-types'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  root: {
    width: '100%',
    padding: '6px 0 7px',
    cursor: 'text'
  }
})

/**
 * A container for a `Element` component from [react-stripe-elements](https://github.com/stripe/react-stripe-elements)
 * Used to impart our themes, styles and behaviours to [Stripe Elements](https://stripe.com/docs/elements/reference)
 * Only used when wrapped by a `StripeElementWrapper`
 * ```js
 * import { StripeInput } from '@theconversation/ui'
 * import
 * ```
 */
const StripeInput = ({ classes, theme, component, onBlur, onChange, onFocus }) => {
  const Component = component
  const c = classes
  return (
    <Component
      className={c.root}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder=''
      style={{
        base: {
          fontSize: `${theme.typography.fontSize}px`,
          fontFamily: theme.typography.fontFamily,
          color: '#000000de'
        }
      }}
    />
  )
}

StripeInput.propTypes = {
  /**
   * Class names to add to the component
   */
  classes: PropTypes.object.isRequired,

  /**
   * Imparts the our theme to the component
   */
  theme: PropTypes.object.isRequired,

  /**
   * An Element component class
   */
  component: PropTypes.func.isRequired,

  /**
   * The callback function when the wrapped input blurs
   */

  onBlur: PropTypes.func,
  /**
   * The callback function when the wrapped input changes
   */

  onChange: PropTypes.func,

  /**
   * The callback function when the wrapped input is focused
   */
  onFocus: PropTypes.func
}

StripeInput.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {}
}

// StripeInput.displayName = 'StripeInput'

export default withStyles(styles, { withTheme: true })(StripeInput)
