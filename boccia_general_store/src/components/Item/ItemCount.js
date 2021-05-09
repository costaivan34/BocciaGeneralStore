import React, { useState } from "react";
import "../../styles/item/ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addCount = (value) => {
    value = value + 1;
    if (value > stock) {
      value = stock;
    }
    setCount(value);
  };

  const subCount = (value) => {
    value = value - 1;
    if (value < 1) {
      value = 1;
    }
    setCount(value);
  };

  onAdd = (value) => {
    alert("vas a comprar " + value + " articulos");
  };

  return (
    <div className="ItemCount">
      <input
        className="btn btn-danger"
        type="button"
        value="-"
        onClick={() => subCount(count)}
      ></input>
      <p>{count}</p>
      <input
        className="btn btn-danger"
        type="button"
        value="+"
        onClick={() => addCount(count)}
      ></input>
      <input
        className="btn btn-outline-danger"
        type="button"
        value="Agregar al carrito"
        onClick={() => onAdd(count)}
      ></input>
    </div>
  );
};
