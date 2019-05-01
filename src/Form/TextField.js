import React from 'react'
import { PropTypes } from 'prop-types'

//this is a proxy component for making a text input
const TextField = ({
  type,
  name,
  handleChange,
  value,
  style,
  placeholder,
  autocomplete,
  ...restProps
}) => {
  return (
    <input
      style={style}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      autocomplete={autocomplete}
      placeholder={placeholder}
      {...restProps}
    />
  )
}

TextField.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.bool
}

export default TextField
