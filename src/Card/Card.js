import React from 'react'
import styles from './Card.modules.css'
import { PropTypes } from 'prop-types'

const Card = props => {
  const { children, key, ...restProps } = props
  const { name, imageFilePath, info, alt } = props.item
  return (
    <li key={key} style={styles.wrapper} {...restProps}>
      <h3>{name}</h3>
      <p>{info}</p>
      <img src={require(`../images/${imageFilePath}`)} alt={alt} />
      <>{children}</>
    </li>
  )
}

export default Card

Card.propTypes = {
  children: PropTypes.node,
  key: PropTypes.number,
  item: PropTypes.object
}
