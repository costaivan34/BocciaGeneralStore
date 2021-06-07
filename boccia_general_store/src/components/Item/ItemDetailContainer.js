import "../../styles/item/ItemListContainer.css";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.js";
import { Loader } from "../loader/Loader.js";
import { getFireStore } from "../../firebase";
import React, { useEffect, useState } from "react";
import { NotFoundItem } from "../error/NotFoundItem.js";


export const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);

  const getProducto =  (id) => {
    const db = getFireStore();
    const productos = db.collection('items').doc(id);
    productos.get().then((res) => {
      setItem({ id, ...res.data() });
    })
      .catch((error) => {
        setItem([1]);
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
