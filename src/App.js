import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import  CartContextProvider  from './components/CartContext';



function App() {
  return (

  <BrowserRouter>

    <CartContextProvider>
        <NavBar />
           <Routes>
              
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/detalle/:detalleid" element={<ItemDetailContainer/>} />
              <Route path="/CartView" element={<CartView />} />
            </Routes>
      </CartContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
