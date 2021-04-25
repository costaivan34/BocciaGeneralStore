import './NavBar.css';
import logo from '../../assets/logo.png';
import {CartWidget} from './CartWidget.js';

export const  NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-secondary fixed-top bg-light"> 
      <div className="container-fluid">  <p className="navbar-brand" href=" ">
          <img src={logo} alt=" " width="30" height="24" className="d-inline-block align-text-top logo"></img>
          Boccia General Store 
        </p>
        <nav className="navigation">
        <ul className="links navbar-nav mr-auto">
          <li className="link nav-item">
            <a  href=" ">Inicio</a>
          </li>
          <li className="link nav-item">
          <a  href=" ">Catalogo</a>
          </li>
          <li className="link nav-item">
          <a  href=" ">Tienda</a>
          </li>
          <li className="link nav-item">
          <a  href=" ">Contacto</a>
          </li>
          <li className="link nav-item">
            <CartWidget />
          </li>
        </ul>
      </nav>
        </div>
    
    </div>
  );
}

