import React from 'react'
import { PropTypes } from 'prop-types'

const DropdownSelect = ({
  name,
  prompt,
  required,
  values,
  handleChange,
  ...restProps
}) => {
  const options = values.map((value, index) => (
    <option key={index} value={value}>
      {value}
    </option>
  ))

  return (
    <select
      {...restProps}
      name={name}
      required={required}
      onChange={handleChange}
    >
      <option value="">Select {prompt}</option>
      {options}
    </select>
  )
}

DropdownSelect.propTypes = {
  array: PropTypes.array,
  name: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.bool,
  handleChange: PropTypes.func
}

export default DropdownSelect
