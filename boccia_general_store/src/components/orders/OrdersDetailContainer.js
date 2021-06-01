import "../../styles/item/ItemDetail.css";
import { useContext, useState, useEffect, Fragment } from "react";
import { CartContext } from "../../context/CartContext.js";
import { UserDetail } from "../user/NewAccountForm.js";
import { UserDetailContainer } from "../user/UserDetailContainer";
import { getFireStore } from "../../firebase";
import firebase from "firebase/app";
import { OrdersDetail } from "./OrdersDetail.js";
import "../../styles/orders/OrdersDetail.css";

export const OrdersDetailContainer = () => {
  const { cart, calculateTotal } = useContext(CartContext);
  const { user, setUser } = useState();

  const canBuy = (cart) => {
    const db = getFireStore();
    cart.map((item) => {
      const itemRef = db.collection("items").doc(item.id);
      if (itemRef.stock - item.quantity < 0) {
        return false;
      }
    });
    return true;
  };

  const stockControl = async () => {
    const db = getFireStore();
    const batch_stockControl = db.batch();
    if (canBuy(cart)) {
      cart.map((item) => {
        const itemRef = db.collection("items").doc(item.id);
        batch_stockControl.update(itemRef, {
          stock: item.stock - item.quantity,
        });
      });
    } else {
      return false;
    }
    batch_stockControl.commit().then((r) => console.log(r));
    return true;
  };

  const purchaseHandler = async (userInfo) => {
    const db = getFireStore();

    if (stockControl()) {
      var purchasesRef = db.collection("purchases");
      const newOrder = {
        buyer: userInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: calculateTotal(),
      };
      purchasesRef.doc().set(newOrder);
      alert("Compra realizada, Nro de Orden " + purchasesRef.doc().id);
    } else {
      alert("No hay stock suficiente para realizar la compra");
    }
  };
  //<UserDetail purchaseHandler={purchaseHandler} />
  useEffect(() => {}, []);

  return (
    <div>
      <div className="OrdersDetailContainer">
        {0 === "0" ? (
          <Fragment>
            <div className="header-title">
              <h3 className="W-title">Order nro 12313213</h3>
              <h3 className="W-title">Welcome to Boccia General Store!!!</h3>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">Home</li>
                <li className="breadcrumb-item active">Purchases</li>
                <li className="breadcrumb-item active">Orders</li>
              </ol>
            </nav>
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
          </Fragment>
        )}
        <OrdersDetail />

        <div className="UserDetailContainer card rounded">
          <h3 className="title">Client Information</h3>
          <div>
            {!user == "" ? (
              //"Continuar como xxxx@mail.com o cerrar sesion   value={`Continue as ${user.mail}`}"
              <div>
                <input
                  id="SignIn"
                  className="btn btn-danger"
                  type="button"
                  value="Sign In"
                ></input>
                <p>or</p>
                <input
                  id="SignUp"
                  className="btn btn-danger"
                  type="button"
                  value="Sign Up"
                ></input>
              </div>
            ) : (
              <div>
                <input
                  id="Continue"
                  className="btn btn-danger"
                  type="button"
                  value="asdadadaasdadasd"
                  onClick={() => purchaseHandler()}
                ></input>
                <p>or</p>
                <input
                  id="LogOut"
                  className="btn btn-danger"
                  type="button"
                  value="Log Out "
                ></input>
              </div>
            )}
       
          </div>
        </div>
      </div>
    </div>
  );
};
