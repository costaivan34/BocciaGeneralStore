
import { OrdersDetail } from "./OrdersDetail.js";
import "../../styles/orders/OrdersDetail.css";
import React, { useEffect} from "react";


export const OrdersDetailContainer = () => {



  useEffect(() => {
  
  }, []);

  return (
    <div>
      <div className="ItemDetailContainer">
          <OrdersDetail  />
      </div>
    </div>
  );
};
