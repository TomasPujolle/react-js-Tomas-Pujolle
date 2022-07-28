import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const CartView = () => {

  const test = useContext(CartContext)
  console.log(test.cartList)
  return (
  <>
    <h1>CartView</h1>
    <hr />
    
  </>
  )
}

export default CartView