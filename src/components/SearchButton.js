import React from "react";

function SearchButton({ searchInput, whenKeyup, whenClick }) {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={whenClick} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={whenKeyup}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchButton;
