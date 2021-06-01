import "../../styles/item/ItemListContainer.css";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.js";
import React, { useEffect, useState } from "react";
import { getFireStore } from "../../firebase";
import { NotFoundItem } from "../error/NotFoundItem.js";
import { Loader } from "../loader/Loader.js";

export const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);

  const getProducto = async (id) => {
    console.log(item);
    const db = getFireStore();
    const docRef = await db.collection("items").doc(id);
    docRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
          setItem([1]);
        }
        let catalogo = doc.data();
        let ids = doc.id;
        catalogo.id = ids;
        setItem(catalogo);
        console.log(item);
        //  console.log("Document data:", doc.data());    // doc.data() will be undefined in this case
      })
      .catch((error) => {
        console.log("Error getting document:", error);
        setItem([1]);
        console.log(item);
      });
  };

  useEffect(() => {
    getProducto(id);
  }, [id]);

  return (
    <div>
      <div className="ItemDetailContainer">
        {item.length === 0 ? (
          <Loader />
        ) : item.length === 1 ? (
          <NotFoundItem />
        ) : (
          <ItemDetail item={item} />
        )}
      </div>
    </div>
  );
};
