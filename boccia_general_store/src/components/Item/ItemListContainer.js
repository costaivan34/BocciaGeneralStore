import "./ItemListContainer.css";
import { ItemList } from "./ItemList.js";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ProductData } from "../../data/ProductData.js";
import { CategoriesData } from "../../data/CategoriesData.js";

export const ItemListContainer = () => {
  let { id } = useParams(0);
  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName]= useState();
 
  const getProductos = async () => {
    let productCategory = ProductData;
    let category ="All";
    if (id > 0){
      productCategory = productCategory.filter(
        (products) => products.idCat === id
      );
      category =CategoriesData.filter(
        (category) => category.id === id
      )
      category =category[0].title
    }
    setCategoryName(category)
      const response = await fetch(
        "https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid"
      );
      const products = await response.json();
    setTimeout(() => {
      setItems(productCategory);
    }, 2000);
    //setItems(products)
  };

  useEffect(() => {
    getProductos();
   
  }, [id]);


  

  return (
    <div>
      <div className="ItemListContainer">
      {id == null ? (
        <div className="header-title">
          <h3 className="W-title">Welcome to Boccia General Store!!!</h3>
        </div>
        ) : (
         null
        )}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              Inicio
            </li>
            <li className="breadcrumb-item active">
              Categorias
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            {categoryName}
            </li>
          </ol>
        </nav>
        {items ? (
          <ItemList items={items} />
        ) : (
          <p>Todavia no tenemos articulos en venta</p>
        )}
      </div>
    </div>
  );
};
