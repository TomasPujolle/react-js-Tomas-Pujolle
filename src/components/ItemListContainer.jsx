import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';


const ItemListContainer = ({greeting}) => {

    const onAdd = (param) => { console.log(`la cantidad es:` + param ) }

    return (
        <>
        <div>{greeting}</div>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    );

};

export default ItemListContainer;