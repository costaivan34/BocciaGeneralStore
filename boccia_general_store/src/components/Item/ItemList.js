import { Item } from "./Item.js";
import "../../styles/item/ItemList.css";
import { Loader } from "../loader/Loader.js";

export const ItemList = ({ items }) => {
  return (
    <div className="ItemList">
      {items.length > 0 ? (
        items.map((article) => (
          <li key={article.id}>
            <Item item={article} />
          </li>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};
