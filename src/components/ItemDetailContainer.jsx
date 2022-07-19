import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount';

const film = { id:1, name:"Stone" ,price:"$148.78" ,stock:71 }


const ItemDetailContainer = () => {

    const onAdd = (param) => { console.log(param) }

    const [data, setData] = useState({});

    useEffect(() => {
        const myPromise = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 1000);
        });

        myPromise.then(res => setData(res));
        }, [])
    


  return (
    <>
    <ItemDetail  data={data}/>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
}

export default ItemDetailContainer