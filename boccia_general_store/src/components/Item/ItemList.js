import { Item } from "./Item.js";
import { Loader } from "../Loader/Loader.js";
import "./ItemList.css";

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
