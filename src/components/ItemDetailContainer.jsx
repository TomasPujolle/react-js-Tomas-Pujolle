import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount';
import {products} from '../data/datos';
import { useParams } from 'react-router-dom';





const ItemDetailContainer = () => {

    const onAdd = (param) => { console.log(param) }

    const [data, setData] = useState({});
    const { detalleid } = useParams();

    useEffect(() => {
        const myPromise = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });

        myPromise.then(res => setData(res.find(product => product.id === parseInt(detalleid))));
        }, [detalleid])
    


  return (
    <>
    <ItemDetail  data={data}/>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
}

export default ItemDetailContainer