import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  const calculateTotal = () => {
    let subtotal = 0;
    cart.map(
      (article) => (subtotal = subtotal + article.quantity * article.price)
    );
    return subtotal;
  };

  const totalQuantity = () => {
    let total = 0;
    cart.map(
      (article) => (total = total + article.quantity)
    );
    return total;
  };
  

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
    const NewCart=  Array.from(cart);;
    if (Index >= 0) {
      NewCart.splice(Index, 1) ;
    }
    setCart(NewCart);
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
      value={{ cart, addItem, removeItem, clear, isInCart, totalQuantity, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
}
