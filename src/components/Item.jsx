import React from 'react'


const Item = ({product}) => {
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.stock}</div>
    </div>
  )
}

export default Item