import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CartWidget from './CartWidget';
import { CartContext } from '../../context/CartContext';
import './NavBar.css';

const NavBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>💮 Eleodora 💮</h1>
      </div>

      <nav className="navbar-links">
        <NavLink className="nav-item" to="/categoria/Home">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/categoria/velas">
          Velas
        </NavLink>
        <NavLink className="nav-item" to="/categoria/esencias">
          Esencias
        </NavLink>
        <NavLink className="nav-item" to="/categoria/productos">
          Productos
        </NavLink>

        <NavLink className="nav-item" to="/cart">
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
