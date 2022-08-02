import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart';



const CartView = () => {

  const { cartList, totalPrice} = useCartContext();

  if (cartList.length === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to="/">Realizar Compra</Link>
      </div>
    )
  }

  return (
  <>
    {
      cartList.map(product => <ItemCart key={ product.id } product={ product }/>)
    }
    <p>
      Total: { totalPrice() }
    </p>
  </>
  )
}

export default CartView