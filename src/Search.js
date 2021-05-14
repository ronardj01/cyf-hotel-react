import React, { useState } from "react";
import SearchButton from "./components/SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    search = searchInput;
    console.log(search);
  };
  return (
    <SearchButton
      searchInput={searchInput}
      whenKeyup={handleSearchInput}
      whenClick={handleSubmit}
    />
  );
};

export default Search;
