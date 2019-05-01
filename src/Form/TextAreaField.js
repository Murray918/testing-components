import React from 'react'
import { PropTypes } from 'prop-types'

const TextAreaField = ({
  //always deconstruct props so we know what we are working with visually
  type,
  onChange,
  name,
  placeholder,
  styles,
  autocomplete,
  ...restProps
}) => {
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

TextAreaField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  styles: PropTypes.object,
  value: PropTypes.string
}

export default TextAreaField
