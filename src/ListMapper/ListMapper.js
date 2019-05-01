///This is mapping component which takes an array and another component as props it. The basic function is that this will map over what ever array its provided and then it will create a un ordered list for the children components to live inside of. You may also wrap the list around another component say a button or an image and this component will be rendered in the card component.

import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './ListMapper.modules.css'

export const ListMapper = props => {
  const { array, component: Component, children, ...restProps } = props
  const composedCards = array.map((item, index) => {
    return (
      <li key={index}>
        <Component item={item} key={index} {...restProps}>
          {children}
        </Component>
      </li>
    )
  })
  return <ul style={styles.list}>{composedCards}</ul>
}

export default ListMapper

ListMapper.propTypes = {
  array: PropTypes.array,
  component: PropTypes.elementType,
  children: PropTypes.node
}
