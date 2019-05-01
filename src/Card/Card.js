import React from 'react'
import styles from './Card.modules.css'
import { PropTypes } from 'prop-types'

const Card = props => {
  const { children, ...restProps } = props
  const { name, imageFilePath, info, alt } = props.item
  return (
    <div style={styles.wrapper} {...restProps}>
      <h3>{name}</h3>
      <p>{info}</p>
      <img src={require(`../images/${imageFilePath}`)} alt={alt} />
      <div>{children}</div>
    </div>
  )
}

export default Card

Card.propTypes = {
  children: PropTypes.node,
  item: PropTypes.object
}
