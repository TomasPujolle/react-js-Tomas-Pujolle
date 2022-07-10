import React, {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const add= () => {
        if (counter < stock) {
            const aux = counter+1
            setCounter(aux);
        }else{
            console.log('No hay stock');
        }
    }

    const subtract = () => {
        if (counter > initial) {
            const aux = counter-1
            setCounter(aux);
        }
    }

  return (
    <div>
        <div>
        <button onClick={ subtract }>-</button>
        <p>{counter}</p>
        <button onClick={ add }>+</button>
        </div>
        <button onClick={ onAdd }>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;