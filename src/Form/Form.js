import React from 'react'
import { PropTypes } from 'prop-types'

const Form = ({ styles, handleSubmit, children, ...restProps }) => {
  return (
    <form style={styles} onSubmit={handleSubmit} {...restProps}>
      {children}
    </form>
  )
}

Form.propTypes = {
  styles: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.elementType
}

export default Form
