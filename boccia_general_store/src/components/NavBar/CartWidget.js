import { useContext } from "react";
import "../../styles/navbar/Navbar.css";
import { CartContext } from "../../context/CartContext.js";

export const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="CartWidget">
      <p className="carrito ">Cart({cartQuantity()})</p>
    </div>
  );
};
