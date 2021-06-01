import "../../styles/item/ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";

export const OrdersDetail = () => {
  const { cart, calculateTotal } = useContext(CartContext);
  return (
    <div className="OrdersDetail">
      <div className="card  product-list ">
        <h3 className="product-list-name">Ordered Products</h3>
        {cart.length > 0
          && cart.map((article) => (
              <div className=" list-group-item">
                <h5 className="name">{article.title}</h5>
                <h5 className="quantity">({article.quantity})</h5>
              </div>
            ))}
        {cart.length > 0 && (
          <div className="total-group list-group-item ">
            <h4 className="cart-total">Total: ${calculateTotal()}</h4>
          </div>
        )}
      </div>
    </div>
  );
};
