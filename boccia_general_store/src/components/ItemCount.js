import pic from '../../src/assets/articulo.png';
import React, { useState } from 'react';
import './ItemCount.css';


export const  ItemCount =({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)
  
  onAdd = (value) =>{
    if (value>stock) {
      value = stock
    }
    if (value<1) {
      value = 1
    }
    setCount(value)
  }

  return (
    <div className="ItemListContainer">
    <div className="card">
        <h1>Bocha roja</h1>
        <img src={pic}/>
        <input className="btn btn-danger" type="button" value="-" onClick={()=>onAdd(count - 1)} ></input>
        <input type="text" value={count}></input>
        <input className="btn btn-danger" type="button" value="+" onClick={()=>onAdd(count + 1)}></input>
        <input className="btn btn-outline-danger" type="button" value="Agregar al carrito"></input>
      </div>
    </div>
  );
}

