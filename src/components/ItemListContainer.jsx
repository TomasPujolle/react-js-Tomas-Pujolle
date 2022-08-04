import React, { useEffect, useState} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    

    const [productList, setproductList] = useState ([]);

    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        
        if (id){
          const queryFilter = query(queryCollection,
           where('category', '==', id),);
        getDocs(queryFilter)
        .then(res => setproductList(res.docs.map(product => ({id : product.id, ...product.data()}))))
        } else{
          getDocs(queryCollection)
            .then(res => setproductList(res.docs.map(product => ({id : product.id, ...product.data()}))))
        }
    }, [id]);
  

    return (
        <>
        <ItemList items= { productList } />
        </>
    );

};

export default ItemListContainer;




//const firestoreFetch = async () => {
 // const querySnapshot = await getDocs(collection(db, "products"));
//  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
 //    id: doc.id,
 //    ...doc.data(),
//  }))
 // return dataFromFirestore
//}
//firestoreFetch()
 //.then(res => setproductList(res))
 //.catch(err => console.log(err))