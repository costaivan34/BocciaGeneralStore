import { CartContext } from "./../context/CartContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import "../styles/Cart.css";

export const Cart = () => {
  const { cart, removeItem, calculateTotal } = useContext(CartContext);



  const calculateSubtotal = (quantity, price) => {
    return price * quantity;
  };

  return (
    <div className="Cart">
      <Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Inicio</li>
            <li className="breadcrumb-item active">Carrito</li>
          </ol>
        </nav>
      </Fragment>
      <div className="list-group">
        {cart.length > 0 ? (
          cart.map((article) => (
            <div className=" list-group-item">
              <img src={article.picture} alt="" className="picture-cart"></img>
              <h4 className="title">
                <Link to={`/item/${article.id}`}>{article.title}</Link>
              </h4>
              <div className="cart-item-detail">
                <h4 className="label">Cantidad:</h4>
                <h4 className="quantity">{article.quantity}</h4>
                <h4 className="price-total">
                  ${calculateSubtotal(article.quantity, article.price)}
                </h4>
                <a
                  className="trashIcon"
                  onClick={() => {
                    removeItem(article.id);
                  }}
                >
                  X
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="card">
            <p className="title-warning">No hay productos en el carrito</p>
            <Link to="/" className="btn btn-danger">
              Buy something
            </Link>
          </div>
        )}
      </div>
      {cart.length > 0 ? (
        <div className="total-group list-group-item ">
          <h4 className="label-total">Total:</h4>
          <h4 className="cart-total">${calculateTotal()}</h4>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
