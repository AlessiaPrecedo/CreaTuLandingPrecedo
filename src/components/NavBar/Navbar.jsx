import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = ({ cart }) => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>💮 Eleodora 💮</h1>
      </div>

      <nav className="navbar-links">
        <NavLink className="nav-item" to="/categoria/Home">Home</NavLink>
        <NavLink className="nav-item" to="/categoria/velas">Velas</NavLink>
        <NavLink className="nav-item" to="/categoria/esencias">Esencias</NavLink>
        <NavLink className="nav-item" to="/productos">Productos</NavLink>

        <NavLink className="nav-item" to="/">Acerca de</NavLink>
        <NavLink className="nav-item" to="/contact">Contacto</NavLink>

        <NavLink className="nav-item" to="/cart">
          <CartWidget cart={cart} />
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
