import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Style.css";



const Item = ({product}) => {
  return (
    < div className="contenedorItem">
      <div className="Item img-thumbnail">
        <h1 className="titulo" >{product.name}</h1>
        <Link to={`/detalle/${product.id}`} ><button type="button" className="btn btn-secondary btn-lg boton">INFO</button></Link>
         <img src={product.img} alt="imagen del producto" className="img" />
      </div>
      </div>
    
  );
}

export default Item