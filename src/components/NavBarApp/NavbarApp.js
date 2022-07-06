import "./NavbarApp.css";
import Logo from "../../assets/logo_nav2.png";
import CartIcon from "../CartWidget/CartWidget.js";
import {  NavLink } from "react-router-dom";

function NavbarApp() {
  return (
    <header className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            id="hamburguesa"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/categorias/Poesia"
                >
                  Poesia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/categorias/Cuento"
                >
                  Cuentos
                </NavLink>
              </li>

                <NavLink
                  activeClassName="active"
                  className="navbar-brand"
                  to="/"
                >
                  <img src={Logo} alt="Logo" id="logoNav" />
                </NavLink>

              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/categorias/Novela"
                >
                  Novelas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/categorias"
                >
                  Contactanos
                </NavLink>
              </li>

            </ul>
          </div>
          <div className="logoCarrito">
            <CartIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarApp;
