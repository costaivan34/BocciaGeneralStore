import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  


  const addItem = (item, quantity) => {
   if (isInCart(item[0].id)){
      const Index = cart.findIndex((i) => i.id === item[0].id);
      cart[Index] = {
        ...cart[Index],
        quantity: cart[Index].quantity + quantity,
      };
    } else {
      setCart([
        ...cart,
        {
          "id": item[0].id,
          "idCat": item[0].idCat,
          "title": item[0].title,
          "price": item[0].price,
          "picture": item[0].picture ,
          "quantity": quantity ,
        },
      ]);
    }
 
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemID) => {
    const Index = cart.findIndex((item) => item.id === itemID);
    if (Index >= 0) {
      cart.splice(Index, 1);
    }
  };

  const isInCart = (itemID) => {
    const Index = cart.findIndex((item) => item.id === itemID);
    if (Index ===-1) {
      return false;
    }
      return true;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}
