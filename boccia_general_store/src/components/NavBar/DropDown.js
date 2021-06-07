import {Link} from "react-router-dom"
import "../../styles/navbar/DropDown.css";
import { getFireStore } from "../../firebase";
import React, { useEffect, useState } from "react";


export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Categories, setCategories] = useState([]);

  const getCategories = async () => {
      const db = getFireStore();
      let CategoriesCollection=db.collection("categorias");
      CategoriesCollection.get().then((querySnapshot) => {
       if (querySnapshot.size === 0){
       }
       let catalogo = querySnapshot.docs.map(doc => doc.data());
       setCategories(catalogo);
       
    }).catch((error)=> {console.log("Error searching items",error);}
     )
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="nav-item dropdown">
    <a href=" " className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" onMouseOut={() => setIsOpen(isOpen)} onMouseOver={() => setIsOpen(!isOpen)}>Catalog</a>
    {isOpen ? (
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {Categories.map((cat) => (
          <li key={cat.key}>
        <Link className="dropdown-item" to={`/category/${cat.key}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
  );
};
