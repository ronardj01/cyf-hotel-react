import React from "react";

function SearchResults(props) {
  const { results } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          {Object.keys(results[0]).map((element, index) => (
            <th key={`th-${index}`}>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={`tr-${index}`}>
            {Object.values(result).map((element, index) => (
              <td key={`td-${index}`}>{element}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
