import "../../styles/navbar/Navbar.css";
import { useContext, Fragment } from "react";
import { CartContext } from "../../context/CartContext.js";

export const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    
       <Fragment className="CartWidget">
      <p  className="carrito ">
        Cart({cartQuantity()})
      </p>
   
    </Fragment>
  )
};
