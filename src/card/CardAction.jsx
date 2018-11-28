import Button from '@material-ui/core/Button'
import React from 'react'

/**
 * The CardAction component is preferred when adding buttons to a CardActions
 * component.
 *
 * Rather than leave it up to each dialog to define the correct variants and
 * colours to use for the action buttons (e.g. save, cancel, etc.), this
 * component ensures consistency by abstracting the action buttons based on the
 * type of action that they perform.
 *
 * For example, dismissive buttons (e.g. cancel, no, etc.) should have lower
 * visual emphasis than primary buttons (e.g. save, yes, etc.), while secondary
 * buttons (e.g. delete, etc.) should be given a different emphasis to indicate
 * to the user that they perform a different action.
 */
const CardAction = ({ children, variant, ...other }) => {
  const buttonColour = variant === 'secondary' ? 'secondary' : 'primary'
  return (
    <Button {...other} color={buttonColour} size='small'>
      {children}
    </Button>
  )
}

export default CardAction
