import { Loader } from "../Loader.js";
import "./ItemList.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="ItemDetail">
      {item.length > 0 ? ( 
         item.map((article) => 
          <div className="card">
            <h4 className="title">{article.title}</h4>
            <img src={article.picture}></img>
            <p>{article.descripcion}</p>
            <p>{article.price}</p>
          </div>)
      ) : (
        <Loader />
      )}
    </div>
  );
};
