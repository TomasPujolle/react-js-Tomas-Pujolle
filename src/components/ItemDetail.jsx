import React from 'react'

const ItemDetail = ({data}) => {
  return (
    <>  
    <h1>{data.name}</h1>
    <h2>Price: {data.price} </h2>
    <h3>Total stock: {data.stock}</h3>
    </>
  )
}

export default ItemDetail