import { useSource } from "../../../utils/hooks";
import { useRef} from "react";
import './searchBar.scss';

export const SearchBar = () => {
  const { searchSource} = useSource(); 
  
  function handleChange(event) {
    searchSource(event.target.value.toLowerCase()); //filter the source
  }
  
  const inputRef = useRef(null);
  
  return (
    <div className="searchBar">
      <label className="label">Search</label>
      <input aria-label="search an employee" placeholder="Type your search here..." ref={inputRef} id="search" className="input" onChange={handleChange} />
    </div>
  );
};
