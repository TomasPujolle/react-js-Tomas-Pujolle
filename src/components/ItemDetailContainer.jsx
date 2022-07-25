import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {products} from '../data/datos';
import { useParams } from 'react-router-dom';





const ItemDetailContainer = () => {


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
    </>
  )
}

export default ItemDetailContainer