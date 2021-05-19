import "../../styles/item/ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "./ItemDetail.js";
import React, { useEffect, useState } from "react";
import { getFireStore } from "../../firebase"

export const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
 
  const getProducto = async () => {
    const db = getFireStore();
    const docRef = db.collection("items").doc(id);
    docRef.get().then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");   
        }
          setItem(doc.data());
          console.log("Document data:", doc.data());    // doc.data() will be undefined in this case        
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
   
  }

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <div>
      <div className="ItemDetailContainer">
        {item ? (
          <ItemDetail item={item} />
        ) : (
          <p>Todavia no tenemos articulos en venta</p>
        )}
      </div>
    </div>
  );
};
