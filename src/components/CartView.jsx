import { doc, collection, setDoc } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart';
import  db  from '../firebase/configs'



const CartView = () => {

  const { cartList, totalPrice} = useCartContext();



  const buyClick = () => {

  const order = {
    buyer:{
      name: 'Tomas',
      email: 'Tomas@gmail.com',
      phone: '123123'
    },

    items: cartList.map(product => ({ id: product.id, title: product.name, price: product.price, quantity: product.quantity })),
    total: totalPrice (),
  }

    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
  }

  createOrderInFirestore()
  .then(result => alert('Order created successfully ' + result.id))
  .catch(e => alert(e))
  } 


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
    <button onClick={buyClick}>Realizar compra</button>
  </>
  )
}

export default CartView