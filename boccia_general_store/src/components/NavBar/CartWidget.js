import "../../styles/navbar/Navbar.css";
import { useContext, Fragment } from "react";
import { CartContext } from "../../context/CartContext.js";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Fragment>
    { totalQuantity() > 0 ? (
       <Fragment className="CartWidget">
      <p  className="carrito ">
        Cart({totalQuantity()})
      </p>
   </Fragment>
    ) : (
      ""
    )}
    </Fragment>
  );
};
