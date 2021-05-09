import "../../styles/item/ItemList.css";
import "../../styles/item/ItemDetail.css";
import { ItemCount } from "./ItemCount.js";
import { Loader } from "../loader/Loader.js";

export const ItemDetail = ({ item }) => {
  return (
    <div className="ItemDetail">
      {item.length > 0 ? ( 
         item.map((article,index) => 
          <div className="container">
            <div className="title-header">
              <h4 className="title">{article.title}</h4>
              <p className="price" >{article.price}</p>
              <img className="picture-prod" alt="" src={article.picture}></img>
              <div className="descrp-header">
              <p className="descrp">{article.descripcion}</p>
              <ItemCount stock={item.stock} initial={1} />
            </div> 
            </div> 
           
          </div>
           )
      ) : (
        <Loader />
      )}
    </div>
  );
};
