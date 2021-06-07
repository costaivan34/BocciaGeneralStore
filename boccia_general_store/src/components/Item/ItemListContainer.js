import { ItemList } from "./ItemList.js";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";
import "../../styles/item/ItemListContainer.css";
import React, { Fragment, useEffect, useState } from "react";



export const ItemListContainer = () => {
  let { id } = useParams("0");
  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName] = useState("All");
  const getCategoryName = async (id) => {
    const db = getFireStore();
    var docRef = db.collection("categorias").doc(id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setCategoryName(doc.data().name);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

 
  const getProductos = async (id) => {
    const db = getFireStore();
    let itemCollection;
    if (id === undefined) {
      id = "0";
    }
    if (id === "0") {
      itemCollection = db.collection("items");
    } else {
      itemCollection = db.collection("items").where("category", "==", `${id}`);
    }
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
        }
        let catalogo = querySnapshot.docs.map((doc) => doc.data());
        let ids = querySnapshot.docs.map((doc) => doc.id);
        for (let i = 0; i < catalogo.length; i++) {
          catalogo[i].id = ids[i];
        }
        setItems(catalogo);
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  };

  useEffect(() => {

    getCategoryName(id);
    getProductos(id);
  }, [id]);

  return (
    <div className="ItemListContainer">
      <div>
        {id == null || id === "0" ? (
          <div className="header-title">
            <h3 className="W-title">Welcome to Boccia General Store!!!</h3>
          </div>
        ) : (
          <div className="header-title">
            <h3 className="W-title">{categoryName}</h3>
          </div>
        )}
        {items ? (
          <Fragment>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">Home</li>
                <li className="breadcrumb-item active">Categories</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {categoryName}
                </li>
              </ol>
            </nav>
            <ItemList items={items} />
          </Fragment>
        ) : (
          <h4>Todavia no tenemos articulos en venta</h4>
        )}
      </div>
    </div>
  );
};
