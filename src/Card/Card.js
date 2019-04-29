import React from 'react'

const Card = props => {
  const { children, ...restProps } = props
  const { name, imageUrl, info, alt } = props.item
  return (
    <div {...restProps}>
      <h3>{name}</h3>
      <p>{info}</p>
      <img src={ImageUrl} alt={alt} />
      {children}
    </div>
  )
}

export default Card
