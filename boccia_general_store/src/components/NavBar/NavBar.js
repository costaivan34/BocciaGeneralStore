import "../../styles/navbar/Navbar.css";
import logo from "../../assets/logo2.png";
import { CartWidget } from "./CartWidget.js";
import { DropDown } from "./DropDown.js";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-secondary  bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img
            src={logo}
            alt=""
            width="300"
            className="d-inline-block align-text-top"
          ></img>
        </Link>
        <nav className="navigation">
          <ul className="links navbar-nav mr-auto">
            <li className="link nav-item">
            <Link to={"/"}>Home</Link>
            </li>
            <li className="link nav-item">
              <DropDown />
            </li>
            <li className="link nav-item">
              <Link to={"/"}>Contact</Link>
            </li>
            <li className="link nav-item">
            <Link to={"/cart"}> <CartWidget /></Link>
             
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
