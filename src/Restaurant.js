import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div className="container mt-2">
      <h3>Restaurant Orders</h3>
      <ul className="list-group-flush">
        <li className="list-group-item">
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
