import React from 'react'
import { PropTypes } from 'prop-types'

//this is a proxy component for making a test input
const TextInput = props => {
  const {
    type,
    name,
    onChange,
    value,
    style,
    placeholder,
    autocomplete,
    ...restProps
  } = props

  return (
    <input
      style={style}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autocomplete={autocomplete}
      placeholder={placeholder}
      {...restProps}
    />
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.bool
}

export default TextInput
