import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "./ItemDetail.js";
import React, { useEffect, useState } from "react";
import {ProductData} from "../../data/ProductData.js"

export const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
 
  const getProducto = async () => {
    let  product = ProductData.filter(products => products.id === id);
    const response = await fetch(
      "https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid"
    );
    const products = await response.json();
    setTimeout(() => {
      setItem(product);
    }, 2000);
    //setItems(products)
  };

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
