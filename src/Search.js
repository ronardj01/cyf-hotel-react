import React, { useState } from "react";
import SearchButton from "./components/SearchButton";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };
  return (
    <SearchButton searchInput={searchInput} whenClick={handleSearchInput} />
  );
};

export default Search;
