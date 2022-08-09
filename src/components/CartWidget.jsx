import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCartContext } from './CartContext';
import "../Styles/CartWidgetStyles.css";


const CartWidget = () => {

    const { totalItems } = useCartContext();
    

    return (
        <div className='contenedor'>
            <i className="bi bi-cart2 cart"></i>
            <span className='Number'> {totalItems() || ""}</span>
        </div>
       
    );
};

export default CartWidget;