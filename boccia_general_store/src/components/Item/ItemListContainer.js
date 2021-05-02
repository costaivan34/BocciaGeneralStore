import { ItemList } from "./ItemList.js";
import "./ItemListContainer.css";
import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import pic from "../../assets/logo.png";
import { Loader } from "../Loader.js";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  let ProductosData = [
    {
      id: "1",
      title: " Handi Life Sport Boccia Set",
      descripcion:
        "Mix and match your own complete Boccia Superior Shine set! The Superior Shine Balls are made of a high-tech polyethylene material, that is both very thing and super strong.Personalise your set by choosing the hardness you prefer for each individual ball. The available hardnesses are: soft, medium-soft, medium, medium-hard and hard.                Choose between a sky blue or grey Superior Boccia Backpack or a blue Superior Boccia Case.Please note that the Superior Shine balls will soften up and obtain their real and lasting hardness after using them for some time. The Boccia Superior Shine balls live up to international competition standards.",
      price: "$300",
      stock: "20",
      picture:
        "https://handilifesport.com/wp-content/uploads/2019/06/EXP1151-7W-100x100.jpg",
    },
    {
      id: "1",
      title: " Elef Boccia balls case",
      descripcion: "",
      price: "$300",
      stock: "20",
      picture: "https://via.placeholder.com/300x200/ff0000/969696"
    },
    {
      id: "1",
      title: "Elef Boccia Ramp",
      descripcion: "articulo 1",
      price: "$300",
      stock: "20",
      picture: "https://bocciaramps.com/wp-content/uploads/2019/05/wood-perspex-boccia-ramp_1-272x182.jpg"
    },
    {
      id: "1",
      title: "Elef Boccia Pointer",
      descripcion: "articulo 1",
      price: "$300",
      stock: "20",
      picture: "https://via.placeholder.com/300x200/ff0000/969696"
    },
  ];
  
  const getProductos = async () => {
    const response = await fetch("https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid");
    const products = await response.json();
    console.log(products)
    setTimeout(() => {
      setItems(ProductosData)
    }, 3000)
    //setItems(products)
}

 /* const getProductos = (data) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(data)
      }, 3000)
      //return rej("Todavia no tenemos articulos en venta")
    })
}*/


  useEffect(() => {
    getProductos()
  }, [])


   
  return (
    <div>
      <div className="ItemListContainer">
      {items? (
        <ItemList items={items} />
      ) : (
        <p>Todavia no tenemos articulos en venta</p>
      )}
      </div>
    </div>
  );
};