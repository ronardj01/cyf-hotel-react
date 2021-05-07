import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div className="container mt-5">
      <h3>Restaurant Orders</h3>
      <ul className="list-group-flush">
        <li className="list-group-item d-flex justify-content-around align-items-center">
          Pizzas: {orders}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
