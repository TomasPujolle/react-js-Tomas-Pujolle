import React, {useState} from 'react'
import "../Styles/DetailStyles.css";


const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);


    const decrease = () => {
        setCounter(counter - 1);
    }

    const increase = () => {
        setCounter(counter + 1);
    }


  return (
    <div className='buttonCount'>
        <div className='buttons'>
        <button className='btn btn-dark b1' disabled={counter <= 1} onClick={ decrease }>-</button>
        <p className='number'>{counter}</p>
        <button className='btn btn-dark b2' disabled={counter >= stock} onClick={ increase }>+</button>
        </div>
        <button className='btn btn-dark agregar' disabled={stock <= 0} onClick={ ()=> onAdd(counter) }>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;