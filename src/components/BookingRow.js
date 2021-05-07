import React, { useState } from "react";
import moment from "moment";

function BookingRow({ result }) {
  const [rowSelected, setRowSelected] = useState(false);

  function changeBackground() {
    rowSelected ? setRowSelected(false) : setRowSelected(true);
  }
  return (
    <tr onClick={changeBackground} className={rowSelected ? "bg-info" : ""}>
      {Object.values(result).map((element, index) => (
        <td key={`td-${index}`}>{element}</td>
      ))}
      <td>{`Has a booking for ${moment(result.checkOutDate, "YYYY-MM-DD").diff(
        moment(result.checkInDate),
        "days"
      )} nigths.`}</td>
    </tr>
  );
}

export default BookingRow;
