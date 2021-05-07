import React, { useState } from "react";

import RestaurantButton from "./components/RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div className="container mt-5">
      <h3>Restaurant Orders</h3>
      <ul className="list-group-flush">
        <li className="list-group-item d-flex justify-content-around align-items-center">
          Pizzas: {orders}{" "}
          {/* <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button> */}
          <RestaurantButton BtnFunction={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
