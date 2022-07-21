import React from 'react'
import {Link} from 'react-router-dom'

const ItemDetail = ({data}) => {
  return (
    <>
    <Link to={`/detalle/${data.id}`}>  
    <h1>{data.name}</h1>
    <h2>Price: {data.price} </h2>
    <h3>Total stock: {data.stock}</h3>
    </Link>
    </>
  )
}

export default ItemDetail