import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
       <NavLink to="/" className="navbar-brand">Weapon-SHOP</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/category/espada" className="nav-link" aria-current="page" >Espadas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/escudo" className="nav-link" >Escudos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/arco" className="nav-link" >Arcos</NavLink>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
  </div>
    );
};

export default NavBar;