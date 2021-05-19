import "../../styles/item/ItemList.css";
import "../../styles/item/ItemDetail.css";
import { ItemCount } from "./ItemCount.js";
import { Loader } from "../loader/Loader.js";
import { useEffect, useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.js";

export const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const [paymentButton, setPaymentButton] = useState(false);
  const { cart, addItem } = useContext(CartContext);
console.log(item)
  useEffect(() => {
    if (amount !== 0) {
      setPaymentButton(true);
    } else {
      setPaymentButton(false);
    }
  }, [amount]);

  const toPayment = () => {
    addItem(item, amount);
  };

  const onAdd = (value) => {
    setAmount(value);
  };

  return (
    <div className="ItemDetail">
      <div className=" list-group-item">
        {item ? (
            <Fragment>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">Inicio</li>
                  <li className="breadcrumb-item active">Product</li>
                  <li className="breadcrumb-item active">{item.name}</li>
                </ol>
              </nav>

              <div className="title-header">
                <h4 className="title">{item.name}</h4>
                <h4 className="price">${item.price}</h4>
                <img
                  className="picture-prod"
                  alt=""
                  src={item.picture}
                ></img>
                <div className="descrp-header">
                  <p className="descrp">{item.descripcion}</p>
                  {paymentButton ? (
                    <div className="payment-box">
                      <Link
                        to="/cart"
                        className="btn btn-danger"
                        onClick={() => {
                          toPayment();
                        }}
                      >
                        Go to payment
                      </Link>
                      <input
                        className="btn btn-outline-danger"
                        type="button"
                        value="Go back"
                        onClick={() => {
                          setAmount(0);
                        }}
                      ></input>
                      <Link to="/" className="btn btn-outline-danger"  onClick={() => {
                          addItem(item, amount);
                        }}>
                        Continue buying
                      </Link>
                    </div>
                  ) : (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                  )}
                </div>
              </div>
            </Fragment>
          
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
