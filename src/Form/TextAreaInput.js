import React from 'react'
import { PropTypes } from 'prop-types'

const TextAreaInput = props => {
  //always deconstruct props so we know what we are working with visually
  const {
    type,
    onChange,
    name,
    placeholder,
    styles,
    autocomplete,
    ...restProps
  } = props

  return (
    <input
      autocomplete={autocomplete}
      type={type}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      style={styles}
      {...restProps}
    />
  )
}

TextAreaInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  styles: PropTypes.object,
  value: PropTypes.string
}

export default TextAreaInput
