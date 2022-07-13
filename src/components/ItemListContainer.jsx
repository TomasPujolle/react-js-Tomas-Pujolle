import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import products from '../data/MOCK_DATA.json';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {

    const [productList, setproductList] = useState ([])

    const onAdd = (param) => { console.log(param) }

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 300);
      });
      myPromise.then((res) => {
        setproductList(res)
      });

    return (
        <>
        <div>{greeting}</div>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList items= { productList } />
        </>
    );

};

export default ItemListContainer;