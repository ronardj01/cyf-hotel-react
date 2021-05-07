import React from "react";

function RestaurantButton(props) {
  const { BtnFunction } = props;
  return (
    <button className="btn btn-primary" onClick={BtnFunction}>
      Add
    </button>
  );
}

export default RestaurantButton;
