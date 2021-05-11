import "../../styles/navbar/Navbar.css";
import { useContext, Fragment } from "react";
import logo from "../../../src/assets/carrito.png";
import { CartContext } from "../../context/CartContext.js";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Fragment className="CartWidget">
      <img
        src={logo}
        alt=" "
        width="30"
        height="24"
        className="d-inline-block align-text-top carrito "
      ></img>
    </Fragment>
  );
};
