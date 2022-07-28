import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';
import { useCartContext } from './CartContext';

const ItemDetail = ({data}) => {

    const [goCart, setgoCart] = useState(false);
    const {addToCart} = useCartContext();

  const onAdd = (quantity) => { 
    addToCart(data, quantity);
    setgoCart(true);
    
  }

  return (
    <>
    <Link to={`/detalle/${data.id}`}>  
    <h1>{data.name}</h1>
    <h2>Price: {data.price} </h2>
    <h3>Total stock: {data.stock}</h3>
    </Link>
    {
      goCart
      ? <Link to='/CartView'>Terminar Compra</Link>
      : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    }
    </>
  )
}

export default ItemDetail
