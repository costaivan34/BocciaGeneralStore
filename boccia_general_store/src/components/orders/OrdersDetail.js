import "../../styles/item/ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import { UserDetail } from "../user/UserDetail.js";
import { getFireStore } from "../../firebase";
import firebase from 'firebase/app';

export const OrdersDetail = () => {
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
        const itemRef =   db.collection("items").doc(item.id);
        batch_stockControl.update(itemRef, {stock: item.stock - item.quantity });
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
        buyer:  userInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: calculateTotal(),
      };
      purchasesRef.doc().set(newOrder);
      alert("Compra realizada, Nro de Orden "+ purchasesRef.doc().id);
    } else {
      alert("No hay stock suficiente para realizar la compra");
    }
  };

  return (
    <div className="OrdersDetail">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Home</li>
          <li className="breadcrumb-item active">Orders</li>
          <li className="breadcrumb-item active">Checkout</li>
        </ol>
      </nav>

      <div className="card  product-list ">
        <h3 className="product-list-name">Ordered Products</h3>
        {cart.length > 0
          ? cart.map((article) => (
              <div className=" list-group-item">
                <h5 className="name">{article.title}</h5>
                <h5 className="quantity">({article.quantity})</h5>
              </div>
            ))
          : ""}
      </div>
      <UserDetail purchaseHandler={purchaseHandler} />
    </div>
  );
};
