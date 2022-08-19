import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';
import { useCartContext } from './CartContext';
import "../Styles/DetailStyles.css";

const ItemDetail = ({data}) => {

    const [goCart, setgoCart] = useState(false);
    const {addToCart} = useCartContext();

  const onAdd = (quantity) => { 
    addToCart(data, quantity);
    setgoCart(true);
    
  }

  return (
    <>
    <div className='contenedorD'>
      <h1 className='textD'>{data.name}</h1>
      <h2 className='textD2'>Price: $ {data.price}  </h2>
      <h3 className='textD3'>Total stock: {data.stock}</h3>
      <p className='textD4'>Info: {data.info}</p>
     <img src={data.img} alt="" className='imgD' />
    {
      goCart
      ? <Link to='/CartView' className='TerminarC btn btn-danger'>Terminar Compra</Link>
      : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    }
    </div> 
    </>
  )
}

export default ItemDetail

