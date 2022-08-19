import React from 'react'
import { useCartContext } from './CartContext'
import '../Styles/FulCartStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCart = ({ product }) => {

    const { removeFromCart } = useCartContext();

  return (
    <div className="card ProductosCart">
  <img src={product.img} alt="" className='card-img-top imgFullCart'/>
  <div className="card-body">
    <h5 className="card-title">Item: { product.name }</h5>
    <p className="card-text">{ product.info }</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Price: { product.price }</li>
    <li className="list-group-item">Cantidad {product.quantity}</li>
    <li className="list-group-item">Subtotal ${ product.quantity * product.price}</li>
  </ul>
  <div className="card-body contenedorBoton">
  <button className="btn btn-danger botonx" onClick={() => removeFromCart(product.id) }>X</button>
  </div>
</div>
    
  )
}

export default ItemCart

