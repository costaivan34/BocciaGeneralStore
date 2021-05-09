import "../../styles/item/ItemList.css";
import "../../styles/item/ItemDetail.css";
import { ItemCount } from "./ItemCount.js";
import { Loader } from "../loader/Loader.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const [paymentButton, setPaymentButton] = useState(false);

  useEffect(() => {
    console.log(amount)
    if (amount !== 0) {
      setPaymentButton(true);
    } else {
      setPaymentButton(false);
    }
  }, [amount]);

  const onAdd = (value) => {
    setAmount(value);
  };

  return (
    <div className="ItemDetail">
      {item.length > 0 ? (
        item.map((article, index) => (
          <div className="container">
            <div className="title-header">
              <h4 className="title">{article.title}</h4>
              <p className="price">{article.price}</p>
              <img className="picture-prod" alt="" src={article.picture}></img>
              <div className="descrp-header">
                <p className="descrp">{article.descripcion}</p>

                {paymentButton ? (
                  <div className="payment-box">
                    <Link to="/cart" className="btn btn-danger">
                      Go to payment
                    </Link>
                    <Link
                      className="btn btn-outline-danger"
                      onClick={() => {
                        setAmount(0);
                      }}
                    >
                      Go back
                    </Link>
                  </div>
                ) : (
                  <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};
