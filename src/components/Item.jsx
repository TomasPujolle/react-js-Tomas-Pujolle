import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({product}) => {
  return (
    <Link to={`/detalle/${product.id}`}>
        <h1>{product.name}</h1>
        <div>{product.price}</div>
        <div>{product.stock}</div>
    </Link>
  );
}

export default Item