import './NavBar.css';
import logo from '../logo.png';

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg navbar-secondary bg-light"> 
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
        </ul>
      </nav>
        </div>
    
    </div>
  );
}

export default NavBar;
