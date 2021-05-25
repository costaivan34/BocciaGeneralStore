import { createContext, useState } from "react";

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

//  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

 // const result = words.filter(word => word.length > 6);
  
//  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]
  

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
      value={{ cart, addItem, removeItem, clear, isInCart, totalQuantity, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
}
