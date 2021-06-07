import firebase from "firebase/app";
import { Link } from "react-router-dom";
import "../../styles/orders/OrdersDetail.css";
import { OrdersDetail } from "./OrdersDetail.js";
import { useContext, useState, Fragment } from "react";
import { getFireStore } from "../../firebase/index.js";
import { CartContext } from "../../context/CartContext.js";
import { UserDetailContainer } from "../user/UserDetailContainer";


export const OrdersDetailContainer = () => {
  const [newOrder, setNewOrder] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const { cart, calculateTotal, clear } = useContext(CartContext);

  console.log(newOrder);

  const purchaseHandler = (userInfo) => {
    let items = [];
    for (const article in cart) {
      items = [
        ...items,
        {
          id: cart[article].id,
          title: cart[article].title,
          price: cart[article].price,
          quantity: cart[article].quantity,
        },
      ];
    }
    const order = {
      buyer: userInfo,
      items: items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: calculateTotal(),
    };
    const db = getFireStore();
    const purchases = db.collection("purchases");
    purchases
      .add(order)
      .then((resp) => {
        order.id = resp.id;
        setNewOrder(order);
        setIsSuccessful(true);
        clear();
      })
      .catch(function (error) {
        console.error("Error adding Tutorial: ", error);
        alert("No hay stock suficiente para realizar la compra");
      });
  };

  return (
    <div>
      <div className="OrdersDetailContainer">
        {isSuccessful ? (
          <Fragment>
            <div className="header-title">
              <h3 className="W-title">Order nro: {newOrder.id}</h3>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">Home</li>
                <li className="breadcrumb-item active">Purchases</li>
                <li className="breadcrumb-item active">Orders</li>
                <li className="breadcrumb-item active">{newOrder.id}</li>
              </ol>
            </nav>
            <OrdersDetail
              items={newOrder.items}
              calculateTotal={newOrder.total}
            />
            <Link
              to="/"
              className="button-back btn btn-danger"
              onClick={() => {}}
            >
              Go home
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <div className="header-title">
              <h3 className="W-title"> New Order</h3>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">Home</li>
                <li className="breadcrumb-item active">Purchases</li>
                <li className="breadcrumb-item active">Orders</li>
                <li className="breadcrumb-item active">Checkout</li>
              </ol>
            </nav>
            <OrdersDetail items={cart} calculateTotal={calculateTotal} />
            <UserDetailContainer purchaseHandler={purchaseHandler} />
          </Fragment>
        )}
      </div>
    </div>
  );
};
