import { CartContext } from "../../context/CartContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import "../../styles/Cart.css";


export const Cart = () => {
  const { cart, removeItem, calculateTotal, calculateSubtotal } = useContext(CartContext);

  return (
    <div className="Cart">
       {0 === "0" ? (
          <div className="header-title">
            <h3 className="W-title">Welcome to Boccia General Store!!!</h3>
          </div>
        ) : (
          <div className="header-title">
            <h3 className="W-title">My Cart</h3>
          </div>
        )}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Home</li>
          <li className="breadcrumb-item active"> My Cart</li>
        </ol>
      </nav>
      <div className="Cart card  bg-body rounded">
        <div className="list-group">
          {cart.length > 0 ? (
            cart.map((article) => (
              <div className=" list-group-item">
                <img
                  src={article.picture}
                  alt=""
                  className="picture-cart"
                ></img>
                <h4 className="name">
                  <Link to={`/item/${article.id}`}>{article.title}</Link>
                </h4>
                <div className="cart-item-detail">
                  <h4 className="label">Qty:</h4>
                  <h4 className="quantity">{article.quantity}</h4>
                  <h4 className="price-total">
                    ${calculateSubtotal(article.id)}
                  </h4>
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="inputRemoveItem"
                    onClick={() => {
                      removeItem(article.id);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-warning">
              <p className="title-warning">No hay productos en el carrito</p>
              <Link to="/" className="btn btn-danger warning-buy">
                Agrega Productos
              </Link>
            </div>
          )}
        </div>
        {cart.length > 0 ? (
          <div className="total-group list-group-item ">
            <h4 className="cart-total">Total: ${calculateTotal()}</h4>
              <Link to={`/checkout/newOrder`} className="btn btn-danger checkout" >
                CheckOut
              </Link>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
