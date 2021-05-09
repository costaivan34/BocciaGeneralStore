import { Item } from "./Item.js";
import "../../styles/item/ItemList.css";
import { Loader } from "../loader/Loader.js";

export const ItemList = ({ items }) => {
  return (
    <div className="ItemList">
      {items.length >0 ? (
        items.map((article) => <Item item={article} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};
