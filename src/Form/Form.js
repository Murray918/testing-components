import React from 'react'

export const Form = props => {
  const { handleSubmit, ...restProps } = props
  return (
    <form onSubmit={handleSubmit} {...restProps}>
      {props.children}
    </form>
  )
}

export const InputTextField = props => {
  const { name, type } = props
  return <input type="text-field" {...props} />
}
