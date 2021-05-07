import React from "react";

function RestaurantButton(props) {
  const { whenClick } = props;
  return (
    <button className="btn btn-primary" onClick={whenClick}>
      Add
    </button>
  );
}

export default RestaurantButton;
