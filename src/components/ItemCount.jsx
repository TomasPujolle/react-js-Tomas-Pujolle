import React, {useState} from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);


    const decrease = () => {
        setCounter(counter - 1);
    }

    const increase = () => {
        setCounter(counter + 1);
    }


  return (
    <div>
        <div>
        <button disabled={counter <= 1} onClick={ decrease }>-</button>
        <p>{counter}</p>
        <button disabled={counter >= stock} onClick={ increase }>+</button>
        </div>
        <button disabled={stock <= 0} onClick={ ()=> onAdd(counter) }>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;