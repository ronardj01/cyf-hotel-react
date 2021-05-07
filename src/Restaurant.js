import React from "react";

import Order from "./components/Order";

const Restaurant = () => {
  return (
    <div className="container mt-5">
      <h3>Restaurant Orders</h3>
      <ul className="list-group-flush">
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
