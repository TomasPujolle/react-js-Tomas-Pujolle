import { createContext, useState, useContext} from "react";

export const useCartContext = () => useContext(CartContext);

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const clearCart = () => setCartList([]);

    const isinCart = (id) => cartList.find(product => product.id === id) ? true : false;

    const removeFromCart = (id) => setCartList(cartList.filter(product => product.id !== id));

    const addToCart = (item, quantity) => {
        let newCart;
        let product = cartList.find(product => product.id === item.id);
         if (product) {
            product.quantity += quantity;
            newCart = [...cartList];
        }else {
             product = {...item, quantity: quantity};
             newCart = [...cartList, product];
            }
    setCartList(newCart);
    }

    const totalPrice = () => { 
        return cartList.reduce((prev, act) => prev + act.price * act.quantity, 0);
    }

    const totalItems = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    return (
        <CartContext.Provider value={{ 
         cartList,
         addToCart, 
         clearCart, 
         isinCart, 
         removeFromCart, 
         totalPrice, 
         totalItems }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContexProvider;



