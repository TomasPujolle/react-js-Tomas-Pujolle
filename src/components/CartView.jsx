import { doc, collection, setDoc } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart';
import  db  from '../firebase/configs'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/CartViewStyles.css'



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
      < >
      <div className='CartViewC'>
        <h1 className='tituloCartVacio'>No hay productos en el carrito</h1>
        <Link className='btn btn-success btnComprar' to="/">Realizar Compra</Link>
      </div>
      </>
    )
  }

  return (
  <>
    <p className="TuCarritoText">Tu Carrito</p>
    <div className='contenedorGeneral'>
      <div className='contenedorProductos'>
    
      {
       cartList.map(product => <ItemCart key={ product.id } product={ product }/>)
      }
      </div>
      <div className='contenedorTR'>
        <p className='TRtitulo'>
        Total: { totalPrice() }
       </p>
        <button className='btn btn-success' onClick={buyClick}>Realizar compra</button>
        </div>
    </div>
  </>
  )
}

export default CartView