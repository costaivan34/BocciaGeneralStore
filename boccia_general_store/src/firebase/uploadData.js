import { ProductData } from "../../data/ProductData.js";
import { getFireStore } from "../../firebase";

const loadData = () => {
/*  let productos = ProductData;
  const db = getFireStore();
  var citiesRef = db.collection("items");
  console.log(productos);
  productos.map((producto) =>
    citiesRef.doc().set({
      category: producto.idCat,
      name: producto.title,
      descripcion: producto.descripcion,
      price: producto.price,
      stock: producto.stock,
      picture: producto.picture,
    })
  );*/
  console.log("puta")
};


export const setData = () =>  loadData()
