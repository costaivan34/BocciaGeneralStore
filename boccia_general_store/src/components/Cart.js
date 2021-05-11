import {CartContext} from "./../context/CartContext.js";
import { useContext } from "react";

export const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="Cart">
      <p className="price">El carrito</p>
    </div>
  );
};
