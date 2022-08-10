import { useSource } from "../../../utils/hooks";
import { useState, useRef } from "react";
import './searchBar.scss';

export const SearchBar = () => {
  const { searchSource } = useSource();
  const [searchString, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value.toLowerCase());
    searchSource(event.target.value.toLowerCase());
  }
  
  const inputRef = useRef(null);
  
  const onButtonClick = () => {
    inputRef.current.value = "";
    setSearch("");
    searchSource('');
  };
  
  return (
    <div className="searchBar">
      <input aria-label="search an employee" ref={inputRef} id="search" className="input" onChange={handleChange} />
      {searchString.length >= 1 ? (
        <div className="searchBar__message">
        <p> Looking for "{searchString}"</p>
        <button onClick={onButtonClick}>X</button>
        </div>
      ) : null}
    </div>
  );
};
