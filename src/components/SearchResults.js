import React, { useState } from "react";
import BookingRow from "./BookingRow";

function SearchResults(props) {
  const { results } = props;

  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          {Object.keys(results[0]).map((element, index) => (
            <th scope="col" key={`th-${index}`}>
              {element}
            </th>
          ))}
          <th scope="col">number of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <BookingRow result={result} key={`bookingRow-${index}`} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
