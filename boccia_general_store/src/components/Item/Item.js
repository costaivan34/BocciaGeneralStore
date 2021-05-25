
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="card shadow p-2  rounded">
      <img  src={item.picture} alt="" className="card-img-top"></img>
      <div className="title-card">
        <h4 className="title"><Link to={`/item/${item.id}`}>{item.name}</Link></h4>
        <h4 className="price">${item.price}</h4>
      </div>
    </div>
  );
};
