import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {orderType}: {orders} <RestaurantButton whenClick={orderOne} />
    </li>
  );
}

export default Order;
