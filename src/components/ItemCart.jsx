import React from 'react'
import { useCartContext } from './CartContext'


const ItemCart = ({ product }) => {

    const { removeFromCart } = useCartContext();

  return (
    <div>
        <p>Item: { product.name }</p>
        <p>Price: { product.price }</p>
        <p>Cantidad {product.quantity}</p>
        <p>Subtotal ${ product.quantity * product.price} </p>
        <button onClick={() => removeFromCart(product.id) }></button>
    </div>
  )
}

export default ItemCart