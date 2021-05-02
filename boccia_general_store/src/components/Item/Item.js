import { ItemCount } from "./ItemCount.js";


export const Item = ({ item }) => {
  return (
    <div className="card">
      <h4 className="title"><a href=" ">{item.title}</a></h4>
      <img src={item.picture} ></img>
      <p>{item.price}</p>
      <ItemCount stock={item.stock} initial={1} />
    </div>
  );
};
