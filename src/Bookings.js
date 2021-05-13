import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null); //Si pongo el valor inicial en [] no funciona.

  useEffect(() => {
    const fetchData = async () => {
      const bookings = await fetch("https://cyf-react.glitch.me");
      const guests = await bookings.json();
      setBookings(guests);
    };
    fetchData();
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings && <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
