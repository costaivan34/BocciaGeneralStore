import "../../styles/orders/OrdersDetail.css";

export const OrdersDetail = ({items, calculateTotal}) => {

  return (
    <div className="OrdersDetail">
      <div className="card  product-list ">
        <h3 className="product-list-name">Ordered Products</h3>
        {items.length > 0
          && items.map((article) => (
              <div key={article.id} className=" list-group-item">
                <h5  className="name">{article.title}</h5>
                <h5 className="quantity">({article.quantity})</h5>
              </div>
            ))}

        {Number.isInteger(calculateTotal) ?(
          <div className="total-group list-group-item ">
            <h4 className="cart-total">Total: ${calculateTotal}</h4>
          </div>
        ):(
          <div className="total-group list-group-item ">
            <h4 className="cart-total">Total: ${calculateTotal()}</h4>
          </div>
          )
        }
      </div>
    </div>
  );
};
