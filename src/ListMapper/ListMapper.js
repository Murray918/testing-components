///This is mapping component which takes an array and another component as props it. The basic function is that this will map over what ever array its provided and then it will create a un ordered list for the children components to live inside of. You may also wrap the list around another component say a button or an image and this component will be rendered in the card component.

import React from 'react'

export const ListMapper = props => {
  const { array, component: Component, ...restProps } = props
  const composedCards = array.map((item, index) => {
    return (
      <li key={index}>
        <Component item={item} {...restProps}>
          {props.children}
        </Component>
      </li>
    )
  })
  return <ul>{composedCards}</ul>
}

export default ListMapper
