import'./NavbarApp.css'
import Logo from '../assets/logo_nav2.png'
import CartIcon from './CartWidget.js'

function NavbarApp() {
  return (
    <header className="navbar">
        <nav className= "navbar navbar-expand-lg navbar-light bg-light">
          <div className= "container-fluid">
            <button id="hamburguesa" className= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className= "navbar-toggler-icon"></span>
            </button>
            <div className= "collapse navbar-collapse" id="navbarNav">
              <ul className= "navbar-nav">
                <li className= "nav-item">
                  <a className= "nav-link active" aria-current="page" href="/" >Inicio</a>
                </li>
                <li className= "nav-item">
                  <a className= "nav-link" href="/" >Quienes Somos</a>
                </li>

                <a className= "navbar-brand" href="/">
                <img src= {Logo} alt="Logo" id="logoNav"/>
                </a>


                <li className= "nav-item">
                  <a className= "nav-link" href="/" >Tienda</a>
                </li>
                <li className= "nav-item">
                  <a className= "nav-link disabled"  href="/">Contactenos</a>
                </li>
              </ul>
            </div>
            <div className='logoCarrito'>
            <CartIcon  />
            </div>
          </div>
          
        </nav>
      </header>
  );
}

export default NavbarApp;
