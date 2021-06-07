import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const calculateSubtotal = (itemID) => {
    let Index = cart.findIndex((i) => i.id === itemID);
    return cart[Index].price *   cart[Index].quantity;
  };
  const calculateTotal = () => {
    let subtotal = 0;
    cart.map(
      (article) => (subtotal = subtotal + article.quantity * article.price)
    );
    return subtotal;
  };

  const cartQuantity = () => {
    let total = 0;
    cart.map(
      (article) => (total = total + article.quantity)
    );
    return total;
  };
  

  const addItem = (item, quantity) => {
   if (isInCart(item.id)){
      const Index = cart.findIndex((i) => i.id === item.id);
      cart[Index] = {
        ...cart[Index],
        quantity: cart[Index].quantity + quantity,
      };
    } else {
      setCart([
        ...cart,
        {
          "id": item.id,
          "idCat": item.category,
          "title": item.name,
          "price": item.price,
          "picture": item.picture ,
          "quantity": quantity ,
          "stock": item.stock ,
        },
      ]);
    }
 
  };

  const clear = () => {
    setCart([]);
  };


  

  const removeItem = (itemID) => {
    let Index = cart.findIndex((item) => item.id === itemID);
    let NewCart=  Array.from(cart);
    if (Index >= 0) {
      NewCart = NewCart.filter(item => item.id !== itemID);
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
      value={{ cart, addItem, removeItem, clear, isInCart, cartQuantity, calculateTotal, calculateSubtotal }}>
      {children}
    </CartContext.Provider>
  );
}
