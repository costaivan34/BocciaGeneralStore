
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="card">
      <img  src={item.picture} alt="" className="card-img-top"></img>
      <div className="title-card">
        <h4 className="title"><Link to={`/item/${item.id}`}>{item.title}</Link></h4>
        <p className="price">{item.price}</p>
      </div>
    </div>
  );
};
