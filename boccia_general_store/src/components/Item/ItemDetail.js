import { Link } from "react-router-dom";
import "../../styles/item/ItemDetail.css";
import { ItemCount } from "./ItemCount.js";
import { useEffect, useState, useContext} from "react";
import { CartContext } from "../../context/CartContext.js";

export const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const [paymentButton, setPaymentButton] = useState(false);
  const { addItem } = useContext(CartContext);

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
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Home</li>
          <li className="breadcrumb-item active">Product</li>
          <li className="breadcrumb-item active">{item.name}</li>
        </ol>
      </nav>

      <div className="card">
        <img className="picture-prod" alt="" src={item.picture}></img>
        <div className="descrp-header ">
          <div className="">
            <h4 className="title">{item.name}</h4>
            <h3 className="price">${item.price}</h3>
          </div>
          <p className="descrp">{item.descripcion}</p>
          {paymentButton ? (
            <div className="payment-box ">
              <Link
                to="/cart"
                className="btn btn-danger"
                onClick={() => {
                  toPayment();
                }}
              >
                Go to payment
              </Link>
              <Link
                to="/"
                className="btn btn-outline-danger"
                onClick={() => {
                  addItem(item, amount);
                }}
              >
                Continue buying
              </Link>
              <Link
                className="btn btn-outline-danger"
                type="button"
                value=""
                onClick={() => {
                  setAmount(0);
                }}

              >Go back</Link>
            </div>
          ) : (
            <div className="control">
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
              <Link to="/" className="btn btn-outline-danger btn-back">
                {" "}
                Go back
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
