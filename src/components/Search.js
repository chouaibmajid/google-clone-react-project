import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useStateContext } from "../Context/ResultContextProvider";
function Search() {
  const { getResults, results, searchTerm, setSearchTerm, loading } =
    useStateContext();
  const [searchData, setSearchData] = useState("");

  console.log(searchTerm);
  console.log(searchData);
  const handlSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchData);
  };
  return (
    <div className="rounded border-4 hover:shadow flex items-center text-grey-50 ">
      <SearchIcon />
      <form onSubmit={handlSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          className="px-14 flex-1 py-3 outline-none border-none"
        />
        {searchData !== "" && <button type="submit">Rechercher</button>}
      </form>
    </div>
  );
}

export default Search;
