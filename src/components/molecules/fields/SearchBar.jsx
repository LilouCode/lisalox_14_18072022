import { useSource } from "../../../utils/hooks";
import { useState, useRef } from "react";
import './searchBar.scss';

export const SearchBar = () => {
  const { filtredSource, searchSource } = useSource();
  const [searchString, setSearch] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value.toLowerCase());
    searchSource(searchString);
    console.log("2  ", filtredSource);
  }
  
  const inputRef = useRef(null);
  
  const onButtonClick = () => {
    inputRef.current.value = "";
    setSearch("");
    searchSource('');
  };
  
  return (
    <div className="searchBar">
      <input ref={inputRef} className="input" onChange={handleChange} />
      {searchString.length >= 1 ? (
        <div className="searchBar__message">
        <p> Looking for "{searchString}"</p>
        <button onClick={onButtonClick}>X</button>
        </div>
      ) : null}
    </div>
  );
};
