import "./DropDown.css";
import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import { CategoriesData } from "../../data/CategoriesData.js";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Categories, setCategories] = useState([]);

  const getCategories = async () => {
      const response = await fetch(
        "https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid"
      );
      const products = await response.json();
    setTimeout(() => {
      setCategories(CategoriesData);
    }, 2000);
    //setItems(products)
  };


  useEffect(() => {
    getCategories();
  }, []);

  
  return (
    <div className="nav-item dropdown">
    <a href="" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" onMouseOut={() => setIsOpen(isOpen)} onMouseOver={() => setIsOpen(!isOpen)}>Catalogo</a>
    {isOpen ? (
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {Categories.map((cat) => (
          <li>
          <Link className="dropdown-item" to={`/category/${cat.id}`}>{cat.title}</Link>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
  );
};
