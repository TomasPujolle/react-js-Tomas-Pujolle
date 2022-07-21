import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {products} from '../data/datos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    

    const [productList, setproductList] = useState ([]);

    const { id } = useParams();

    useEffect(() => {
      if (id === undefined) {
        const myPromise = new Promise(resolve => {
         setTimeout(() => {
           resolve(products);
         }, 1000);
      });
      myPromise.then(res => setproductList(res));
    }else{
      const myPromise = new Promise(resolve => {
        setTimeout(() => {
          resolve(products.filter(product => product.category === id));
        }, 1000);
      });
        myPromise.then(res => setproductList(res));
      }
      
    }, [id])
  

    return (
        <>
        <ItemList items= { productList } />
        </>
    );

};

export default ItemListContainer;