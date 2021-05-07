import React from "react";

import Order from "./components/Order";

const Restaurant = () => {
  const orderTypes = ["Pizzas", "Salads", "Chocolate cake"];

  return (
    <div className="container mt-5">
      <h3>Restaurant Orders</h3>
      <ul className="list-group-flush">
        {orderTypes.map(orderType => (
          <Order orderType={orderType} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
